// Start Open Login And Resiter With Link #?

window.addEventListener('popstate', function (event) {
    const currentUrl = window.location.href;
    if (currentUrl.toString().toLowerCase().includes("register")) {
        document.getElementById("btnsinginheadertop").click();
    } else if (currentUrl.toString().toLowerCase().includes("login")) {
        document.getElementById("btnloginheadertop").click();
    }

});

// For User Can Back With Back Buttom 
function handleBackButtonEvent(e) {

    var conprofile = document.getElementById("PrifileContainer").classList;
    var consearch = document.getElementById("SearchShowAndHide").classList;
    var conchats = document.getElementById("ChatsContainer").classList;
    var conchat = document.getElementById("ChatContainer").classList;

    const list = [conprofile, consearch, conchat, conchats];


    for (let i = 0; i < list.length; i++) {
        if (list[i].contains("conprofile")) {

            if (list[i].contains("ChatContainer")) {
                document.getElementById("closechat").focus();
                document.getElementById("closechat").click();
                break;
            }
            if (list[i].contains("ConLeftChatDesctop")) {
                document.getElementById("BtnChats").focus();
                document.getElementById("BtnChats").click();
                break;
            }
            if (list[i].contains("ModalSearch")) {
                document.getElementById("BtnGame").focus();
                document.getElementById("BtnGame").click();
                break;
            }
            if (list[i].contains("ModalProfile")) {
                document.getElementById("BtnProfile").focus();
                document.getElementById("BtnProfile").click();
                break;
            }
        }
    }
    if (document.getElementById("openSide").classList.contains("OpenWalletmenuMobile")) {

        CloseShowSidebar('BtnHome');
    }

    history.pushState(null, '', location.href);

}

window.onpopstate = function (e) {

    handleBackButtonEvent(e);

};

history.pushState(null, '', location.href);
// END For User Can Back With Back Buttom 



const currentUrl = window.location.href;
if (currentUrl.toString().toLowerCase().includes("register")) {
    document.getElementById("btnsinginheadertop").click();
}
if (currentUrl.toString().toLowerCase().includes("login")) {
    document.getElementById("btnloginheadertop").click();
}

//End Open Login And Resiter With Link #?

// add fade and remove it form login modal For First Time
const width = window.innerWidth;
if (width > "995") {
    document.getElementById("exampleModal6").classList.add("fade")
    document.getElementById("exampleModal5").classList.add("fade")
    document.getElementById("resetppass").classList.add("fade")
} else {
    document.getElementById("exampleModal6").classList.remove("fade")
    document.getElementById("exampleModal5").classList.remove("fade")
    document.getElementById("resetppass").classList.remove("fade")

}
// End add fade and remove it form login modal 
// add fade and remove it form login modal For Any Size
function updateSize() {
    const width = window.innerWidth;

    if (width > "995") {
        document.getElementById("exampleModal6").classList.add("fade")
        document.getElementById("exampleModal5").classList.add("fade")
        document.getElementById("resetppass").classList.add("fade")
    } else {
        document.getElementById("exampleModal6").classList.remove("fade")
        document.getElementById("exampleModal5").classList.remove("fade")
        document.getElementById("resetppass").classList.remove("fade")
    }
}
window.addEventListener('resize', updateSize);
updateSize();
// End add fade and remove it form login modal 

var open = document.getElementById("openSide");
// Wallet-3 Js
function CloseShowSidebar(obj) {
    // End Hide All Pops
    var open = document.getElementById("openSide");
    var close = document.getElementById("closeSide");

    if (window.innerWidth < "992") {

        // For Mobile
        if (open.classList.contains("OpenWalletmenuMobile")) {
            open.classList.add("CloseWalletmenuMobile");
            open.classList.remove("OpenWalletmenuMobile");
        } else {
            open.classList.remove("CloseWalletmenuMobile");
            open.classList.add("OpenWalletmenuMobile");
        }

    } else {
        open.classList.remove("CloseWalletmenuMobile");
        open.classList.add("OpenWalletmenuMobile");
        // For Desktop
        if (open.classList.contains("wallet-menuWidthOpen")) {
            open.classList.add("wallet-menuWidthClose");
            open.classList.remove("wallet-menuWidthOpen");
        } else {
            open.classList.remove("wallet-menuWidthClose");
            open.classList.add("wallet-menuWidthOpen");
        }

        if (close.classList.contains("d-none")) {
            close.classList.add("d-flex");
            close.classList.remove("d-none");
        } else {
            close.classList.remove("d-flex");
            close.classList.add("d-none");
        }
    }

    if ((document.getElementById("BtnSidbar")).classList.contains("rowsidedownmobileselected")) {
        HideAllPopAndGoBackHome();
    } else {
        changeitem("BtnSidbar");
    }
}

function getbackhomeformobilesidbardown() {
    // for get back in home buttom in size mobile in down sidbar
    var items = document.getElementsByClassName("rowsidedownmobile");

    for (let i = 0; i < items.length; i++) {

        if (items[i].classList.contains("rowsidedownmobileselected")) {
            items[i].classList.remove("rowsidedownmobileselected");
        }
    }

    var item = document.getElementsByClassName("rowsidedownmobile")[2];
    item.classList.add("rowsidedownmobileselected");
    // End OF THAT get back in home buttom in size mobile in down sidbar
}

// Search index down

function filterinputsearch(obj) {


    const filterValuewallet = obj.value.toLowerCase();
    var num = 0;
    const Walletitems =
        document.querySelectorAll('.listItem4');

    for (let i = 0; i < Walletitems.length; i++) {
        var txt = Walletitems[i].getElementsByClassName("searchcontent3")[0].innerText.toLowerCase();
        if (txt.includes(filterValuewallet)) {
            Walletitems[i].classList.add('d-flex');
            Walletitems[i].classList.remove('d-none');

        } else {
            Walletitems[i].classList.remove('d-flex');
            Walletitems[i].classList.add('d-none');
            ++num

        }
    }


    if (document.getElementsByClassName("selectedcategory")[0]) {
        document.getElementsByClassName("selectedcategory")[0].classList.remove('selectedcategory');
    }
    if (obj.value === "") {
        document.getElementById("showallcategory").classList.add('selectedcategory');
    }


    // For Show And Hide Nothing is Here Box
    if (num === Walletitems.length) {
        document.getElementById("noting2").classList.add("d-flex");
        document.getElementById("noting2").classList.remove("d-none");
        document.getElementById("noting1").classList.add("d-flex");
        document.getElementById("noting1").classList.remove("d-none");
    } else {
        document.getElementById("noting2").classList.remove("d-flex");
        document.getElementById("noting2").classList.add("d-none");
        document.getElementById("noting1").classList.remove("d-flex");
        document.getElementById("noting1").classList.add("d-none");
    }

}

function ChangeContactBox(obj) {
    // Reset Input Search
    document.getElementById("filterInput").value = "";

    if (document.getElementsByClassName("selectedcategory")[0]) {
        const text1 = document.getElementsByClassName("selectedcategory")[0];
        text1.classList.remove('selectedcategory');
    }
    obj.classList.add("selectedcategory");


    var num = 0;
    const listItems =
        document.querySelectorAll('.listItem4');

    const filterValue = obj.innerText.toLowerCase();
    listItems.forEach(function (item) {
        const text = item.getElementsByClassName("searchcontent4")[0].innerHTML.toLowerCase();

        if (text.includes(filterValue)) {
            item.classList.remove('d-none');
            item.classList.add('d-flex');
        } else {
            item.classList.add('d-none');
            item.classList.remove('d-flex');
            ++num;
        }
        if (filterValue.includes("لابی")) {
            item.classList.remove('d-none');
            item.classList.add('d-flex');
            num = 0;
        }
    });

    // For Show And Hide Nothing is Here Box
    if (num === listItems.length) {
        document.getElementById("noting2").classList.add("d-flex");
        document.getElementById("noting2").classList.remove("d-none");
        document.getElementById("noting1").classList.add("d-flex");
        document.getElementById("noting1").classList.remove("d-none");
    } else {
        document.getElementById("noting2").classList.remove("d-flex");
        document.getElementById("noting2").classList.add("d-none");
        document.getElementById("noting1").classList.remove("d-flex");
        document.getElementById("noting1").classList.add("d-none");
    }

}

function ChangeContactBox2(obj) {
    const text1 = document.getElementsByClassName("selectedcategory2")[0];
    text1.classList.remove('selectedcategory2');
    obj.classList.add("selectedcategory2");
    document.getElementById("text-box").innerHTML = obj.innerText;
}

function ChangeBotLastBet(obj) {
    const text1 = document.getElementsByClassName("selectedbtnlast")[0];
    text1.classList.remove('selectedbtnlast');
    obj.classList.add("selectedbtnlast");
}

function ShowMoreTXT(obj) {
    var item = document.getElementsByClassName("showtxt");

    if (obj.innerText == "بیشتر") {
        for (let index = 0; index < item.length; index++) {
            item[index].classList.remove("d-none")
            document.getElementsByClassName("showmore")[0].classList.add("d-none");
            document.getElementsByClassName("showmore")[1].classList.add("d-none");
            document.getElementsByClassName("showless")[0].classList.remove("d-none");
            document.getElementsByClassName("showless")[1].classList.remove("d-none");
        }
    } else {
        for (let index = 0; index < item.length; index++) {
            item[index].classList.add("d-none")
            document.getElementsByClassName("showmore")[0].classList.remove("d-none");
            document.getElementsByClassName("showmore")[1].classList.remove("d-none");
            document.getElementsByClassName("showless")[0].classList.add("d-none");
            document.getElementsByClassName("showless")[1].classList.add("d-none");
        }
    }
}

function ShowMoreTXT1(obj) {
    var item = document.getElementsByClassName("showtxt1");

    if (obj.innerText == "بیشتر") {
        for (let index = 0; index < item.length; index++) {
            item[index].classList.remove("d-none")
            document.getElementsByClassName("showmore1")[0].classList.add("d-none");
            document.getElementsByClassName("showmore1")[1].classList.add("d-none");
            document.getElementsByClassName("showless1")[0].classList.remove("d-none");
            document.getElementsByClassName("showless1")[1].classList.remove("d-none");
        }
    } else {
        for (let index = 0; index < item.length; index++) {
            item[index].classList.add("d-none")
            document.getElementsByClassName("showmore1")[0].classList.remove("d-none");
            document.getElementsByClassName("showmore1")[1].classList.remove("d-none");
            document.getElementsByClassName("showless1")[0].classList.add("d-none");
            document.getElementsByClassName("showless1")[1].classList.add("d-none");
        }
    }
}

// wallet
function showhideInventory() {
    var x = document.getElementById("Inventory");

    if (x.type === "password") {
        x.type = "text";

    } else {
        x.type = "password";
    }
}

function SearchCountry(obj) {
    const filterValuewallet = obj.value.toLowerCase();
    const Walletitems =
        document.querySelectorAll('.monyWithdrawal');

    for (let i = 0; i < Walletitems.length; i++) {
        var txt = Walletitems[i].getElementsByTagName("h6")[0].innerText.toLowerCase();
        if (txt.includes(filterValuewallet)) {
            Walletitems[i].classList.add('d-flex');

        } else {
            Walletitems[i].classList.remove('d-flex');
            Walletitems[i].classList.add('d-none');
        }
    }

}

function SearchBoxMenu(obj) {
    const filterValuewallet = obj.value.toLowerCase();
    const Walletitems =
        document.querySelectorAll('.listItem1');

    for (let i = 0; i < Walletitems.length; i++) {
        var txt = Walletitems[i].getElementsByTagName("small")[0].innerText.toLowerCase();
        if (txt.includes(filterValuewallet)) {
            Walletitems[i].classList.add('d-flex');

        } else {
            Walletitems[i].classList.remove('d-flex');
            Walletitems[i].classList.add('d-none');
        }
    }

}

function ChangeBtn() {

    var item = document.getElementsByClassName("con-h6")

    for (let i = 0; i < item.length; i++) {
        if (item[i].classList.contains("selectedbuttonwallet")) {
            item[i].classList.remove("selectedbuttonwallet")
            document.getElementById("shadowtxt").classList.remove("d-none");
            document.getElementById("shadowtxt2").classList.remove("d-none");
            document.getElementById("shadowtxt-1").classList.add("d-none");
            document.getElementById("shadowtxt2-1").classList.add("d-none");
        } else {
            item[i].classList.add("selectedbuttonwallet");
            document.getElementById("shadowtxt").classList.add("d-none");
            document.getElementById("shadowtxt2").classList.add("d-none");
            document.getElementById("shadowtxt-1").classList.remove("d-none");
            document.getElementById("shadowtxt2-1").classList.remove("d-none");
        }

    }
}

function copytxt() {
    var copyText = document.getElementById("mytext");
    navigator.clipboard.writeText(copyText.innerText);
    alert("کپی شد !");
}
//   Chat 2
function SearchChat(obj) {
    const filterValuewallet = obj.value.toLowerCase();
    const Walletitems =
        document.querySelectorAll('.conchat2');

    for (let i = 0; i < Walletitems.length; i++) {
        var txt = Walletitems[i].getElementsByTagName("h5")[0].innerText.toLowerCase();
        if (txt.includes(filterValuewallet)) {
            Walletitems[i].classList.add('d-flex');

        } else {
            Walletitems[i].classList.remove('d-flex');
            Walletitems[i].classList.add('d-none');
        }
    }

}

function showlanguage(obj, obj1) {

    if (document.getElementById(obj).classList.contains("listlanguageclose")) {
        document.getElementById(obj).classList.remove("listlanguageclose");
        document.getElementById(obj1).classList.remove("fa-angle-down");
        document.getElementById(obj1).classList.add("fa-angle-up");
    } else {
        document.getElementById(obj).classList.add("listlanguageclose");
        document.getElementById(obj1).classList.remove("fa-angle-up");
        document.getElementById(obj1).classList.add("fa-angle-down");
    }

}

function changetxtlanguage(obj) {
    document.getElementById("txtlangauge").innerText = obj.innerText;
    document.getElementById("langeage").classList.add("listlanguageclose");
    document.getElementById("anglelangeage").classList.remove("fa-angle-up");
    document.getElementById("anglelangeage").classList.add("fa-angle-down");
}



function changetxtlanguage1(obj) {
    document.getElementById("txtlangauge1").innerText = obj.innerText;
    document.getElementById("langeage1").classList.add("listlanguageclose");
    document.getElementById("anglelangeage1").classList.remove("fa-angle-up");
    document.getElementById("anglelangeage1").classList.add("fa-angle-down");
}
// chat
function heartred(obj) {
    if (obj.classList.contains("redheard")) {
        obj.classList.remove("redheard")
    } else {
        obj.classList.add("redheard")
    }
}

function ShowProfUser() {
    ShowAndHidePop('PrifileContainer', 'conprofClose', 'conprofile');
}

// index
function changeitem(obj) {

    var items = document.getElementsByClassName("rowsidedownmobile");

    for (let i = 0; i < items.length; i++) {

        if (items[i].classList.contains("rowsidedownmobileselected")) {
            if (items[i].id === "BtnGame") {
                var conprev = document.getElementById("SearchShowAndHide");
                conprev.classList.remove("conprofile");
                conprev.classList.add("conprofClose");
            } else if (items[i].id === "BtnProfile") {
                var conprev = document.getElementById("PrifileContainer");
                conprev.classList.remove("conprofile");
                conprev.classList.add("conprofClose");
            } else if (items[i].id === "BtnChats") {
                var conprev = document.getElementById("ChatsContainer");
                conprev.classList.remove("conprofile");
                conprev.classList.add("conprofClose");
            }

            items[i].classList.remove("rowsidedownmobileselected");
        }
    }

    // obj.classList.add("rowsidedownmobileselected");
    document.getElementById(obj).classList.add("rowsidedownmobileselected");

}
// for right menu
function ShowLastMessage() {
    var conchat = document.getElementById("conchat");

    if (conchat.classList.contains("conchatopen")) {
        conchat.classList.remove("conchatopen");
        conchat.classList.add("conchatclose");

        document.getElementById("anglechat").classList.add("fa-angle-down");
        document.getElementById("anglechat").classList.remove("fa-angle-up");
        document.getElementById("btnchats").classList.remove("sidcon-chat");
        document.getElementById("btnchats1").classList.remove("sidcon-chat");

    } else {
        conchat.classList.add("conchatopen");
        conchat.classList.remove("conchatclose");
        document.getElementById("anglechat").classList.remove("fa-angle-down");
        document.getElementById("anglechat").classList.add("fa-angle-up");
        document.getElementById("btnchats").classList.add("sidcon-chat");
        document.getElementById("btnchats1").classList.add("sidcon-chat");
    }

}

function closeopenchatleft() {
    var conchat = document.getElementById("ChatsContainer");

    if (conchat.classList.contains("conprofClose")) {
        conchat.classList.remove("conprofClose");
        conchat.classList.add("conprofile");


    } else {
        conchat.classList.add("conprofClose");
        conchat.classList.remove("conprofile");
    }

}


function ShowSmallMenu() {
    var conchat = document.getElementById("consmallmenu");

    if (conchat.classList.contains("rowmenuwalletopen")) {
        conchat.classList.remove("rowmenuwalletopen");
        conchat.classList.add("rowmenuwalletclose");
        document.getElementById("angleclub").classList.add("fa-angle-down");
        document.getElementById("angleclub").classList.remove("fa-angle-up");
    } else {
        conchat.classList.add("rowmenuwalletopen");
        conchat.classList.remove("rowmenuwalletclose");
        document.getElementById("angleclub").classList.remove("fa-angle-down");
        document.getElementById("angleclub").classList.add("fa-angle-up");
    }

}

// For Chat 
function OpenMicrophone() {
    navigator.mediaDevices
        .getUserMedia({
            video: false,
            audio: true
        })
        .then((stream) => {
            window.localStream = stream; // A
            window.localAudio.srcObject = stream; // B
            window.localAudio.autoplay = true; // C
        })
        .catch((err) => {
            console.error(`you got an error: ${err}`);
            alert("EROOR :" + $(err));
        });

}

function OpenKeyboardEmojiforMobile(obj, obj1, con, open, close, closeinput, key, em) {
    if (obj1 !== "undefined") {
        if (document.getElementById(con).classList.contains(open)) {
            document.getElementById(obj1).classList.remove(closeinput);
            document.getElementById(con).classList.remove(open);
            document.getElementById(key).classList.remove("d-flex");
            document.getElementById(key).classList.add("d-none");
            document.getElementById(em).classList.remove("d-none");
            document.getElementById(em).classList.add("d-flex");
            document.getElementById(obj).select()
            document.getElementById(obj).focus()
        } else {
            document.activeElement.blur();
            if ("virtualKeyboard" in navigator) {
                navigator.virtualKeyboard.hide();
            }
            document.getElementById(key).classList.add("d-flex");
            document.getElementById(key).classList.remove("d-none");
            document.getElementById(em).classList.add("d-none");
            document.getElementById(em).classList.remove("d-flex");
            document.getElementById(con).classList.add(open);
            document.getElementById(obj1).classList.add(closeinput);
        }
    }

}

function justchangeiconmictosendleftchat() {
    document.getElementById("mic").classList.remove("showmic");
    document.getElementById("mic").classList.add("closemic");
    document.getElementById("send").classList.add("showsend");
    document.getElementById("send").classList.remove("closesend");
}

function changemictosend() {
    if (document.getElementById("textuser").value == "") {
        document.getElementById("mic").classList.add("showmic");
        document.getElementById("mic").classList.remove("closemic");

        document.getElementById("send").classList.remove("showsend");
        document.getElementById("send").classList.add("closesend");
    } else {
        document.getElementById("mic").classList.remove("showmic");
        document.getElementById("mic").classList.add("closemic");

        document.getElementById("send").classList.add("showsend");
        document.getElementById("send").classList.remove("closesend");
    }
}

function changemictosend1() {
    if (document.getElementById("textuser1").value == "") {
        document.getElementById("mic1").classList.add("showmic");
        document.getElementById("mic1").classList.remove("closemic");

        document.getElementById("send1").classList.remove("showsend");
        document.getElementById("send1").classList.add("closesend");
    } else {
        document.getElementById("mic1").classList.remove("showmic");
        document.getElementById("mic1").classList.add("closemic");

        document.getElementById("send1").classList.add("showsend");
        document.getElementById("send1").classList.remove("closesend");
    }
}

function changemictosend11() {
    if (document.getElementById("textuserticket").value == "") {
        document.getElementById("mic11").classList.add("showmic");
        document.getElementById("mic11").classList.remove("closemic");

        document.getElementById("send11").classList.remove("showsend");
        document.getElementById("send11").classList.add("closesend");
    } else {
        document.getElementById("mic11").classList.remove("showmic");
        document.getElementById("mic11").classList.add("closemic");

        document.getElementById("send11").classList.add("showsend");
        document.getElementById("send11").classList.remove("closesend");
    }
}

// For Geting file of user and Send It
var namefile;
var typefile;
var sizefile;
const inputElement = document.getElementById('myFile');
inputElement.addEventListener('change', (event) => {
    const fileList = event.target.files;

    if (fileList.length > 0) {
        const file = fileList[0];

        document.getElementById("textuser1").value = file.name;
        namefile = file.name;
        typefile = file.type;
        sizefile = file.size;
        changemictosend1();
    }
});



var namefile2;
var typefile2;
var sizefile2;

function GetFile(obj) {
    var files = obj.files;

    if (files.length > 0) {
        const file = files[0];
        document.getElementById("textuserticket").value = file.name;
        namefile2 = file.name;
        typefile2 = file.type;
        sizefile2 = file.size;
        changemictosend11();
    }
}



// End it But After It in SendTxt funcion
function SendTxt(input, container, mic, send, context, obj1) {
    // For Reset Icon In Mobile 
    getdowninputwehnkeyboardemojiclose(obj1)
    if (document.getElementById("Text-Mobile-Chat1") != null) {
        getdowninputwehnkeyboardemojiclose1("Text-Mobile-Chat1");
    }
    // Get Text
    let text = document.getElementById(input).value;

    if (text === namefile) {
        let element = document.createElement("div");
        element.className = "d-flex justify-content-start w-75 align-self-start rowchat";
        element.innerHTML = "<div class='d-flex justify-content-center align-items-start conimgchat mt-3'> <img src='./assets/Image/31108a21-4b64-4d9d-93b9-48d94608620d copy.png' onclick='ShowProfUser()'class='profuser' alt='' /> </div> <div class='contxtchate contxtchate2 m-2 d-flex flex-column justify-content-center align-items-start' > <h6 onclick='ShowProfUser()'class='profusertxt'>  ALI </h6> <div class='d-flex align-items-start p-0 p-2 px-3 contentfile'> <section class='m-0 p-0 filecircle ml-2' > <i class='fa fa-arrow-circle-down' ></i>  </section> <section class='m-0 p-0 ' > <p class='m-0 p-0' id='name' > " + namefile + " </p>   <section> <small id='type' >" + typefile + "</small> <small id='size' > " + sizefile + " </small> </section> </section> </div> </div> <div class='conlikechat d-flex align-items-center'></div>"
        document.getElementById(container).lastChild.previousSibling.after(element);

    } else if (text === namefile2) {
        let element = document.createElement("div");
        element.className = "d-flex justify-content-start w-75 align-self-start rowchat";
        element.innerHTML = "<div class='d-flex justify-content-center align-items-start conimgchat mt-3'> <img src='./assets/Image/31108a21-4b64-4d9d-93b9-48d94608620d copy.png' onclick='ShowProfUser()'class='profuser' alt='' /> </div> <div class='contxtchate contxtchate2 m-2 d-flex flex-column justify-content-center align-items-start' > <h6 onclick='ShowProfUser()'class='profusertxt'>  ALI </h6> <div class='d-flex align-items-start p-0 p-2 px-3 contentfile'> <section class='m-0 p-0 filecircle ml-2' > <i class='fa fa-arrow-circle-down' ></i>  </section> <section class='m-0 p-0 ' > <p class='m-0 p-0' id='name' > " + namefile2 + " </p>   <section> <small id='type' >" + typefile2 + "</small> <small id='size' > " + sizefile2 + " </small> </section> </section> </div> </div> <div class='conlikechat d-flex align-items-center'></div>"
        document.getElementById(container).lastChild.previousSibling.after(element);
    } else if (input === "textuserticket") {
        // Get Date
        let today = new Date().toLocaleDateString('fa-IR-u-nu-latn');
        let now = new Date();
        let hour = now.getHours();
        let min = now.getMinutes();
        // End Get Date
        let element = document.createElement("div");
        element.className = "d-flex justify-content-start w-75 align-self-start rowchat1";
        element.innerHTML = "<div class='d-flex justify-content-center align-items-start conimgchat mt-3'> <img src='./assets/Image/31108a21-4b64-4d9d-93b9-48d94608620d copy.png' onclick='ShowProfUser()' class='profuser'type='button'data-bs-toggle='modal'data-bs-target='#modalprofile'alt=''/> </div><div class='contxtchate contxtchate2 m-2 d-flex flex-column justify-content-center align-items-start'><h6 type='button'data-bs-toggle='modal'data-bs-target='#modalprofile'onclick='ShowProfUser()'class='profusertxt'>ALi</h6><div class='d-flex align-items-start flex-column'><p class='m-0 p-0'>" + text + "</p> <img src='./assets/Image/Isolation_Mode.png' alt='' /> </div> <span class='align-self-end mr-1  mt-1 date-text' > <small>" + today + "</small> <small class='mr-2' >" + hour + ":" + min + "</small> </span>   </div><div class='conlikechat d-flex align-items-center'> <i class='fa fa-heart'onclick='heartred(this)'aria-hidden='true'></i></div>";
        document.getElementById(container).lastChild.previousSibling.after(element);

    } else {
        let element = document.createElement("div");
        element.className = "d-flex justify-content-start w-75 align-self-start rowchat";
        element.innerHTML = "<div class='d-flex justify-content-center align-items-start conimgchat mt-3'> <img src='./assets/Image/31108a21-4b64-4d9d-93b9-48d94608620d copy.png' onclick='ShowProfUser()' class='profuser'type='button'data-bs-toggle='modal'data-bs-target='#modalprofile'alt=''/> </div><div class='contxtchate contxtchate2 m-2 d-flex flex-column justify-content-center align-items-start'><h6 type='button'data-bs-toggle='modal'data-bs-target='#modalprofile'onclick='ShowProfUser()'class='profusertxt'>ALi</h6><div class='d-flex align-items-start flex-column'><p class='m-0 p-0'>" + text + "</p> <img src='./assets/Image/Isolation_Mode.png' alt='' /> </div> </div><div class='conlikechat d-flex align-items-center'> <i class='fa fa-heart'onclick='heartred(this)'aria-hidden='true'></i></div>";
        document.getElementById(container).lastChild.previousSibling.after(element);
    }
    // Reset Input
    document.getElementById(input).value = "";
    document.getElementById(mic).classList.add("showmic");
    document.getElementById(mic).classList.remove("closemic");

    document.getElementById(send).classList.remove("showsend");
    document.getElementById(send).classList.add("closesend");
    document.getElementById(input).select();
    document.getElementById(input).focus();

    // For Load To Bottom
    var el = document.querySelector(context);
    el.scrollTop = el.scrollHeight;

    // For Change PlaceHolder Left Chat 
    var placeholder = document.getElementById("textuser").removeAttribute("placeholder");
    var placeholder = document.getElementById("textuser").setAttribute("placeholder", "ADD TEXT...");
}
// When Enter Pres Send Text
document.getElementById("textuser1").addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        if (document.getElementById("textuser1").value.length > "0") {
            SendTxt('textuser1', 'ConChat1', 'mic1', 'send1', '.CONCHATLEFT1');
            var placeholder = document.getElementById("textuser1").removeAttribute("placeholder");
            var placeholder = document.getElementById("textuser1").setAttribute("placeholder", "ADD TEXT...");
        } else {
            var placeholder = document.getElementById("textuser1").removeAttribute("placeholder");
            var placeholder = document.getElementById("textuser1").setAttribute("placeholder", "ADD TEXT :/");
        }
    }
});


function HideAllPopAndGoBackHome() {
    var items = document.getElementsByClassName("rowsidedownmobile");
    for (let i = 0; i < items.length; i++) {

        if (items[i].classList.contains("rowsidedownmobileselected")) {
            if (items[i].id === "BtnGame") {
                var conprev = document.getElementById("SearchShowAndHide");
                conprev.classList.remove("conprofile");
                conprev.classList.add("conprofClose");
            } else if (items[i].id === "BtnProfile") {
                var conprev = document.getElementById("PrifileContainer");
                conprev.classList.remove("conprofile");
                conprev.classList.add("conprofClose");
            } else if (items[i].id === "BtnChats") {
                var conprev = document.getElementById("ChatsContainer");
                conprev.classList.remove("conprofile");
                conprev.classList.add("conprofClose");
            }
            var conprev = document.getElementById("ChatContainer");
            conprev.classList.remove("conprofile");
            conprev.classList.add("conprofClose");


            items[i].classList.remove("rowsidedownmobileselected");
        }
    }
    //Start Hide Menu
    var open1 = document.getElementById("openSide");
    open1.classList.add("CloseWalletmenuMobile");
    open1.classList.remove("OpenWalletmenuMobile");
    //End Hide Menu
    changeitem("BtnHome");
}






















































































function OpenProfilePop(con1, close, open) {
    // document.getElementById("PrifileContainer").setAttribute("style", "200 !important");
    document.getElementById("PrifileContainer").setAttribute("style", "z-index: 180 !important");

    //Start Hide Menu
    var open1 = document.getElementById("openSide");
    open1.classList.add("CloseWalletmenuMobile");
    open1.classList.remove("OpenWalletmenuMobile");
    //End Hide Menu


    var con = document.getElementById(con1);
    if (con.classList.contains(close)) {
        con.classList.remove(close);
        con.classList.add(open);
    } else {

        con.classList.add(close);
        con.classList.remove(open);

    }
    if (con1 === "PrifileContainer") {
        if ((document.getElementById("BtnProfile")).classList.contains("rowsidedownmobileselected")) {
            HideAllPopAndGoBackHome();
        } else {
            changeitem("BtnProfile");
        }
    }

}

function ShowAndHidePop(con1, close, open, namegame) {
    // For When Search Modal Open Change Name Of Game To Category Game
    if (namegame != null) {
        document.getElementById("namemodalsearch").innerHTML = namegame.innerText;
        document.getElementById("inputsearchtxt").placeholder = "جستجوی " + namegame.innerText + " ...";
    } else {
        if (document.getElementById("namemodalsearch") != null) {
            document.getElementById("namemodalsearch").innerHTML = "بازی ها";
            document.getElementById("inputsearchtxt").placeholder = "جستجوی ..."
        }
    }

    var con = document.getElementById(con1);
    if (con.classList.contains(close)) {

        con.classList.remove(close);
        con.classList.add(open);
    } else {

        con.classList.add(close);
        con.classList.remove(open);
    }

    //Start Hide Menu
    var open1 = document.getElementById("openSide");
    open1.classList.add("CloseWalletmenuMobile");
    open1.classList.remove("OpenWalletmenuMobile");
    //End Hide Menu
    if (con1 === "ChatsContainer") {
        if ((document.getElementById("BtnChats")).classList.contains("rowsidedownmobileselected")) {
            HideAllPopAndGoBackHome();
        } else {
            changeitem("BtnChats");
        }
    }
    if (con1 === "SearchShowAndHide") {
        if ((document.getElementById("BtnGame")).classList.contains("rowsidedownmobileselected")) {
            HideAllPopAndGoBackHome();
        } else {
            changeitem("BtnGame");
        }
    }
    if (con1 === "PrifileContainer") {
        if ((document.getElementById("BtnProfile")).classList.contains("rowsidedownmobileselected")) {
            document.getElementById("PrifileContainer").setAttribute("style", "z-index: 180 !important");
            HideAllPopAndGoBackHome();
        } else {
            document.getElementById("PrifileContainer").setAttribute("style", "z-index: 203 !important");

        }
    }
    if (con1 === "ChatContainer") {
        if (document.getElementById("ChatContainer").classList.contains("conprofClose")) {
            document.getElementById("Text-Mobile-Chat").classList.remove("conwritemessage");
            document.getElementById("Text-Mobile-Chat").classList.add("conwritemessageclose");

        } else {
            // For Scroll to Last Chat / End Chat
            var el = document.querySelector(".CONCHATLEFT1");
            el.scrollTop = el.scrollHeight;
            document.getElementById("Text-Mobile-Chat").classList.add("conwritemessage");
            document.getElementById("Text-Mobile-Chat").classList.remove("conwritemessageclose");

        }
    }





}













function maxWindow() {
    window.moveTo(0, 0);

    if (document.all) {
        top.window.resizeTo(screen.availWidth, screen.availHeight);
    } else if (document.layers || document.getElementById) {
        if (top.window.outerHeight < screen.availHeight || top.window.outerWidth < screen.availWidth) {
            top.window.outerHeight = screen.availHeight;
            top.window.outerWidth = screen.availWidth;
        }
    }
}

// Cutdown Timer
window.onload = function () {
    // Open Welcome Pop For First Time And Time not Wih Link Login And Register
    const currentUrl = window.location.href;
    if (!currentUrl.toString().toLowerCase().includes("register") & !currentUrl.toString().toLowerCase().includes("login")) {
        if (localStorage.getItem("hasCodeRunBefore") === null) {
            maxWindow()
            document.getElementById("welcomebtn").click();
            localStorage.setItem("hasCodeRunBefore", true);
        }
    }
    // End Open Welcome Pop For First Time And Time not Wih Link Login And Register
    var day = parseInt(document.getElementById("day").innerText);
    var hour = parseInt(document.getElementById("hour").innerText);
    var minute = parseInt(document.getElementById("min").innerText);
    var sec = parseInt(document.getElementById("sec").innerText);

    setInterval(function () {
        document.getElementById("day").innerHTML = day;
        document.getElementById("hour").innerHTML = hour;
        document.getElementById("min").innerHTML = minute;
        document.getElementById("sec").innerHTML = sec;

        sec--;

        if (sec == "00") {
            minute--;
            sec = 60;
        }

        if (minute == "-1") {
            hour--;
            minute = 60;
        }

        if (hour == "-1") {
            day--;
            hour = 24;
        }


    }, 1000);
}



// Support

function AddTicket() {
    // Get Time
    let today = new Date().toLocaleDateString('fa-IR-u-nu-latn');
    let now = new Date();
    let hour = now.getHours();
    let min = now.getMinutes();
    // End Get Time
    // Get Text
    let text = document.getElementById("textticket").value;
    let title = document.getElementById("titleticket").value;
    let Priority = document.getElementById("Priority").value;
    // EndGet Text

    if (text.length > "0" && title.length > "0" && Priority.length > "0") {
        let element = document.createElement("section");
        element.className = "d-flex justify-content-center align-items-center w-100 mt-3 ticket";
        element.setAttribute("onclick", "OpenChatTicket(this)");
        element.innerHTML = "<small id='tit'  class='position-absolute' style='opacity: 0;' >" + title + "</small> <small id='pri'  class='position-absolute' style='opacity: 0;' >" + Priority + "</small> <div class='backticket '></div><div class='w-100 d-flex justify-content-between align-items-center flex-column flex-md-row ContainerTicket'><div class='pr-0 pr-md-2 textticket align-self-start'><p class='m-0 p-0 mb-2 ml-md-2'>" + text + " </p> <small> " + today + " </small> <small class='mr-2'> " + hour + ":" + min + "</small> </div> <div class='d-flex justify-content-center align-items-center BtnTicket mt-3 mt-md-0'><p class='m-0 p-0 coloryellow'>پاسخ داده نشده</p></div></div>"
        document.getElementById("conTicket").lastChild.previousSibling.after(element);
        document.getElementById("textticket").value = "";
        document.getElementById("Priority").value = "فوری";
        document.getElementById("titleticket").value = "";
        document.getElementsByClassName("ConContainerAddNewTicket")[0].classList.remove("d-flex")
        document.getElementsByClassName("ConContainerAddNewTicket")[0].classList.add("d-none");
        document.getElementsByClassName("ConContainerTickets")[0].classList.remove("d-none");
        document.getElementsByClassName("ConContainerTickets")[0].classList.add("d-flex");
        document.getElementById("textticket").removeAttribute("placeholder");
        document.getElementById("Priority").removeAttribute("placeholder");
        document.getElementById("titleticket").removeAttribute("placeholder");
        document.getElementById("backticket").classList.remove("d-flex")
        document.getElementById("backticket").classList.add("d-none")
    } else {
        document.getElementById("textticket").setAttribute("placeholder", "متن را وارد کنید !");
        document.getElementById("Priority").setAttribute("placeholder", "انتخاب کنید !");
        document.getElementById("titleticket").setAttribute("placeholder", "عنوان را وارد کنید");

    }


}

function OpenAddNewTicket() {
    document.getElementsByClassName("ConContainerAddNewTicket")[0].classList.remove("d-none")
    document.getElementsByClassName("ConContainerAddNewTicket")[0].classList.add("d-flex");
    document.getElementsByClassName("ConContainerTickets")[0].classList.remove("d-flex");
    document.getElementsByClassName("ConContainerTickets")[0].classList.add("d-none");
    document.getElementById("backticket").classList.add("d-flex")
    document.getElementById("backticket").classList.remove("d-none")
}

function OpenChatTicket(obj) {
    var title = obj.getElementsByTagName("small")[0].innerHTML;
    var pri = obj.getElementsByTagName("small")[1].innerHTML;
    document.getElementById("titlenewticket").innerHTML = title;
    document.getElementById("priShowTick").innerHTML = pri;
    document.getElementsByClassName("ConContainerTickets")[0].classList.remove("d-flex")
    document.getElementsByClassName("ConContainerTickets")[0].classList.add("d-none");
    document.getElementsByClassName("ConContainerChatTicket")[0].classList.remove("d-none");
    document.getElementsByClassName("ConContainerChatTicket")[0].classList.add("d-flex");
    document.getElementById("titlepageticket").innerHTML = "مشاهده تیکت";
    document.getElementById("backticket").classList.add("d-flex")
    document.getElementById("backticket").classList.remove("d-none")
    // For Load To Bottom
    var el = document.querySelector(".CONCHATLEFT11");
    el.scrollTop = el.scrollHeight;
}

function BackToTickets() {
    document.getElementsByClassName("ConContainerAddNewTicket")[0].classList.remove("d-flex")
    document.getElementsByClassName("ConContainerAddNewTicket")[0].classList.add("d-none");
    document.getElementsByClassName("ConContainerChatTicket")[0].classList.add("d-none");
    document.getElementsByClassName("ConContainerChatTicket")[0].classList.remove("d-flex");
    document.getElementsByClassName("ConContainerTickets")[0].classList.remove("d-none");
    document.getElementsByClassName("ConContainerTickets")[0].classList.add("d-flex");
    document.getElementById("titlepageticket").innerHTML = "پشتیبانی";
    document.getElementById("backticket").classList.remove("d-flex")
    document.getElementById("backticket").classList.add("d-none")
}

// Wallet2
function OpenSelectBox(obj) {
    if (obj.getElementsByTagName("i")[0].classList.contains("fa-angle-down")) {
        obj.getElementsByTagName("i")[0].classList.remove("fa-angle-down");
        obj.getElementsByTagName("i")[0].classList.add("fa-angle-up");
    } else {
        obj.getElementsByTagName("i")[0].classList.remove("fa-angle-up");
        obj.getElementsByTagName("i")[0].classList.add("fa-angle-down");
    }
}

function SelectedItem(obj) {
    document.getElementById("selectbox1").getElementsByTagName("span")[0].innerHTML = obj.innerHTML;
}

function SelectedItem1(obj) {
    document.getElementById("selectbox2").getElementsByTagName("span")[0].innerHTML = obj.innerHTML;
}
// For Emojy Keyboard
function selectemoji(obj) {
    document.getElementById("textuser1").value = obj.innerText + document.getElementById("textuser1").value;
    document.getElementById('mic1').classList.remove("showmic");
    document.getElementById("mic1").classList.add("closemic");

    document.getElementById('send1').classList.add("showsend");
    document.getElementById('send1').classList.remove("closesend");
}
// For Emojy Keyboard
function selectemoji1(obj) {
    document.getElementById("textuserticket").value = obj.innerText + document.getElementById("textuserticket").value;
    document.getElementById('mic11').classList.remove("showmic");
    document.getElementById("mic11").classList.add("closemic");

    document.getElementById('send11').classList.add("showsend");
    document.getElementById('send11').classList.remove("closesend");
}

function getdowninputwehnkeyboardemojiclose(obj1) {
    if (obj1 !== "undefined") {
        if (
            document.getElementById("containeremoji").classList.contains("fg-emoji-containeroepn")) {
            document.getElementById(obj1).classList.remove("conwritemessageOpenForEmojy");
            document.getElementById("containeremoji").classList.remove("fg-emoji-containeroepn");
            document.getElementById("openemojy").classList.remove("d-flex");
            document.getElementById("openemojy").classList.add("d-none");
            document.getElementById("closeemojy").classList.remove("d-none");
            document.getElementById("closeemojy").classList.add("d-flex");
        }

    }
}

function getdowninputwehnkeyboardemojiclose1(obj1) {
    if (obj1 !== "undefined") {
        if (
            document.getElementById("containeremoji1").classList.contains("fg-emoji-containeroepn1")) {
            document.getElementById(obj1).classList.remove("conwritemessageOpenForEmojy1");
            document.getElementById("containeremoji1").classList.remove("fg-emoji-containeroepn1");
            document.getElementById("openemojy1").classList.remove("d-flex");
            document.getElementById("openemojy1").classList.add("d-none");
            document.getElementById("closeemojy1").classList.remove("d-none");
            document.getElementById("closeemojy1").classList.add("d-flex");
        }

    }
}

// End For Emojy Keyboard


function changename(obj) {
    var txt = document.getElementById("txtname").value;
    if (txt.length > 0) {
        obj.setAttribute("data-bs-dismiss", "modal");
        document.getElementById("nameuser").innerHTML = txt;
        document.getElementById("txtname").value = "";
        obj.click()
    } else
        obj.removeAttribute("data-bs-dismiss", "modal");
    obj.click()
}

// For Ticket

function opendropdown() {
    if (document.getElementById("mydropdow").classList.contains("mydropdownclose")) {
        document.getElementById("mydropdow").classList.remove("mydropdownclose");
        document.getElementById("mydropdow").classList.add("mydropdown");
    } else {
        document.getElementById("mydropdow").classList.add("mydropdownclose");
        document.getElementById("mydropdow").classList.remove("mydropdown");
    }
}

function changedroptext(obj) {
    document.getElementById("Priority").value = obj.innerHTML;
    opendropdown();
}

// Wallet 2 
function changeinputtothis(obj) {
    document.getElementById("selectbox2").getElementsByTagName("span")[0].innerHTML = obj.innerText;
}

function changeinputtothis1(obj) {
    document.getElementById("selectbox2").getElementsByTagName("span")[0].innerHTML = obj.getElementsByTagName("small")[1].innerText;
}

function addmonyname() {
    var name = document.getElementById("btnnamemony").value.toUpperCase();
    var con = document.getElementById("conaddedmony");
    if (name.length > 0) {
        let element = document.createElement("div");
        element.className = "d-flex justify-content-end align-items-center btntitle btntitlemore";
        element.setAttribute("onclick", "changeinputtothis(this)");
        element.setAttribute("data-bs-target", "#exampleModal11");
        element.setAttribute("data-bs-toggle", "modal");
        element.innerHTML = "<small>" + name + "</small> <div class='threeimgon ml-1'><img src='./assets/Image/BTC.png' alt='' /><img src='./assets/Image/SOL-black.png' alt='' /><img src='./assets/Image/images 1.png' alt='' /></div>"
        con.lastChild.previousSibling.after(element);
        var name = document.getElementById("btnnamemony").value = "";
    }
}


// Forget Pass

function moveToNext(current, nextId) {
  const isValid = /^[0-9]$/.test(current.value);
  if (isValid) {
    document.getElementById(nextId)?.focus();
  } else {
    current.value = ""; // clear invalid input
  }
}