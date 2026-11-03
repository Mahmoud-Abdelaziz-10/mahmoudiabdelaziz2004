@echo off
title Mahmoud Ibrahim - Portfolio Launcher
echo =========================================================
echo Starting Mahmoud Ibrahim - Landscape Engineering Portfolio...
echo =========================================================
cd /d "%~dp0"
if exist "portfolio\index.html" (
    start "" "portfolio\index.html"
) else (
    start "" "index.html"
)
echo Portfolio opened in your default web browser!
timeout /t 3 >nul
