param($path)

$ErrorActionPreference = "Stop"

. .\calculoHashSHA1.ps1
. .\calculoHashSHA256.ps1

$files = Get-ChildItem $path -File
foreach ($file in $files) {
    $hash1Item = Get-FileSHA1 $file
    $hash256Item = Get-FileSHA256 $file
    Write-Host "The Hash SHA1 from file $file is $hash1Item"
    Write-Host "The Hash SHA265 from file $file is $hash256Item"
    Write-Host "----------------------------------------"
}