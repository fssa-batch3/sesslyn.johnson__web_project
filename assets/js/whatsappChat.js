(function (Q, R) {
    if (Q.qr) return;
    var u = 'https://webview.quickreply.ai/whatsapp/script.min.js';
    var h = R.head || R.documentElement;
    var e = R.createElement('script');
    e.type = 'text/javascript';
    e.async = true;
    e.src = u;
    Q.qr = {
        brandSetting: {
            includePageLink: false,
            messageText: "Hi.. Do you have a query. Contact us ?",
            phoneNumber: "+916381040916"
        },
        chatButtonSetting: {
            sideMargin: 20,
            marginBottom: 20,
            position: "right",
            buttonType: "ICON_TEXT",
            buttonText: "Chat Now",
            buttonBgColor: "#282525",
            marginTop: 30,
            buttonTextColor: "white"
        }
    };
    e.onload = function () {
        CreateWhatsappChatWidget(Q.qr);
    };
    h.insertBefore(e, h.lastChild);
})(window, document);
