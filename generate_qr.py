import sys, qrcode
if len(sys.argv) != 2:
    raise SystemExit("Usage: python generate_qr.py https://votre-url")
url = sys.argv[1]
img = qrcode.make(url)
img.save("qr_portfolio.png")
print("QR généré : qr_portfolio.png")
