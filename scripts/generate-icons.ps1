Add-Type -AssemblyName System.Drawing

function Resize-Image {
    param(
        [System.Drawing.Image]$img,
        [int]$w,
        [int]$h,
        [string]$outputPath,
        [System.Drawing.Imaging.ImageFormat]$format
    )
    $destRect = New-Object System.Drawing.Rectangle(0, 0, $w, $h)
    $destImage = New-Object System.Drawing.Bitmap($w, $h)
    $destImage.SetResolution($img.HorizontalResolution, $img.VerticalResolution)

    $graphics = [System.Drawing.Graphics]::FromImage($destImage)
    $graphics.CompositingMode = [System.Drawing.Drawing2D.CompositingMode]::SourceCopy
    $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
    $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

    $graphics.DrawImage($img, $destRect, 0, 0, $img.Width, $img.Height, [System.Drawing.GraphicsUnit]::Pixel)
    $graphics.Dispose()

    $destImage.Save($outputPath, $format)
    $destImage.Dispose()
    Write-Host "Created: $outputPath"
}

# Function to generate multi-size ICO file containing 16x16, 32x32, 48x48
function Create-Ico {
    param(
        [System.Drawing.Image]$img,
        [string]$icoPath
    )
    $sizes = @(16, 32, 48)
    $bitmaps = @()
    $pngStreams = @()

    foreach ($size in $sizes) {
        $destRect = New-Object System.Drawing.Rectangle(0, 0, $size, $size)
        $bmp = New-Object System.Drawing.Bitmap($size, $size)
        $g = [System.Drawing.Graphics]::FromImage($bmp)
        $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
        $g.DrawImage($img, $destRect, 0, 0, $img.Width, $img.Height, [System.Drawing.GraphicsUnit]::Pixel)
        $g.Dispose()

        $ms = New-Object System.IO.MemoryStream
        $bmp.Save($ms, [System.Drawing.Imaging.ImageFormat]::Png)
        $pngStreams += $ms
        $bmp.Dispose()
    }

    $fs = [System.IO.File]::Create($icoPath)
    $bw = New-Object System.IO.BinaryWriter($fs)

    # ICO Header
    $bw.Write([uint16]0) # Reserved
    $bw.Write([uint16]1) # Type (1 = ICO)
    $bw.Write([uint16]$sizes.Count) # Number of images

    $offset = 6 + ($sizes.Count * 16)

    for ($i = 0; $i -lt $sizes.Count; $i++) {
        $s = $sizes[$i]
        $bytes = $pngStreams[$i].ToArray()
        
        # Directory Entry
        $bw.Write([byte]($s -band 0xFF)) # Width (0 for 256)
        $bw.Write([byte]($s -band 0xFF)) # Height
        $bw.Write([byte]0)               # Color count
        $bw.Write([byte]0)               # Reserved
        $bw.Write([uint16]1)             # Planes
        $bw.Write([uint16]32)            # Bit count
        $bw.Write([uint32]$bytes.Length) # Size of image data
        $bw.Write([uint32]$offset)       # Offset of image data
        
        $offset += $bytes.Length
    }

    # Write image data
    for ($i = 0; $i -lt $sizes.Count; $i++) {
        $bytes = $pngStreams[$i].ToArray()
        $bw.Write($bytes)
        $pngStreams[$i].Dispose()
    }

    $bw.Close()
    $fs.Close()
    Write-Host "Created valid multi-resolution ICO: $icoPath"
}

$srcPath = 'public/images/brand/fruitella-logo.jpg'
$img = [System.Drawing.Image]::FromFile($srcPath)

Resize-Image -img $img -w 16 -h 16 -outputPath 'public/favicon-16x16.png' -format ([System.Drawing.Imaging.ImageFormat]::Png)
Resize-Image -img $img -w 32 -h 32 -outputPath 'public/favicon-32x32.png' -format ([System.Drawing.Imaging.ImageFormat]::Png)
Resize-Image -img $img -w 48 -h 48 -outputPath 'public/favicon-48x48.png' -format ([System.Drawing.Imaging.ImageFormat]::Png)
Resize-Image -img $img -w 180 -h 180 -outputPath 'public/apple-touch-icon.png' -format ([System.Drawing.Imaging.ImageFormat]::Png)
Resize-Image -img $img -w 192 -h 192 -outputPath 'public/icon-192.png' -format ([System.Drawing.Imaging.ImageFormat]::Png)
Resize-Image -img $img -w 512 -h 512 -outputPath 'public/icon-512.png' -format ([System.Drawing.Imaging.ImageFormat]::Png)

Create-Ico -img $img -icoPath 'public/favicon.ico'

$img.Dispose()
Write-Host "All icons generated successfully!"
