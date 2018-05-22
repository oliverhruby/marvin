$computer = "192.168.0.108"
$source = resolve-path "$($PSScriptRoot)\dist"
$target = "/home/pi/Websites/marvin/dist"

$credential = (Get-Credential)

# copy over the files
& "pscp.exe" -pw "$([System.Net.NetworkCredential]::new('', $credential.Password).Password)" "$($source)\*" "pi@$($computer):$($target)"

# set the access rights
$sshSession = New-SSHSession -ComputerName $computer -Credential $credential
Invoke-SSHCommand -SSHSession $sshSession -Command "sudo chmod 777 $($target)/*"
