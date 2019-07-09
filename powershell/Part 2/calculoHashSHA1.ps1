
function Get-FileSHA1 ($filePath) {
    $fileContent = Get-Content $filePath
    $fileBytes = [System.Text.Encoding]::UTF8.GetBytes($fileContent)
    $sha1 = New-Object System.Security.Cryptography.SHA1Managed
    
    $hash = $sha1.ComputeHash($fileBytes)
    $prettyHashSB = New-Object System.Text.StringBuilder
    foreach ($byte in $hash) {
        $hexaNotation = $byte.ToString("X2")
        $prettyHashSB.Append($hexaNotation) > $null # OU -> "| Out-Null" -> oq não é performático se tem mtas voltas no loop
    }

    $prettyHashSB.ToString()
}

$path = "D:\Workspaces\alexgwasp\alura\powershell\Part 2"
$file = "calculoHashSHA1.ps1"
#$hashFromFile = 
Get-FileSHA1 "$path\$file"

#Write-Host "$hashFromFile is the hash from file $file" -BackgroundColor Red -ForegroundColor Yellow