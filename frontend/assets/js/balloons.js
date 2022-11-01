// Voucher

const modalVoucher = document.querySelector(".js-modal-voucher");
const voucher = document.querySelector(".js-Voucher");
const btnVoucher = document.querySelector(".js-modal-container-voucher");
const modalCloses = document.querySelector(".js-modal-close");

function showVoucher() {
  btnVoucher.classList.add("active");
  modalVoucher.classList.add("open");
  voucher.classList.add("off");
}

function hideVoucher() {
  // btnVoucher.classList.add("voucher-ani-out");
  modalVoucher.classList.remove("open");
  voucher.classList.remove("off");
}

voucher.addEventListener("click", showVoucher);

btnVoucher.addEventListener("click", function (event) {
  event.stopPropagation();
});

modalCloses.addEventListener("click", hideVoucher);
modalVoucher.addEventListener("click", hideVoucher);

// Message & minus
const modalMessage = document.querySelector(".js-modal-message");
const message = document.querySelector(".js-Message");
const modalMinus = document.querySelector(".js-modal-minus");

function showMessage() {
  modalMessage.classList.add("open");
}

function hideMessage() {
  modalMessage.classList.remove("open");
}

message.addEventListener("click", showMessage);

modalMinus.addEventListener("click", function (event) {
  hideMessage();
  hideMore(); // khi tắt Message thì Message-More cũng tắt nếu trước có bật
  hideMessageChat();// khi tắt Message thì Message-Chat cũng tắt nếu trước có bật
});

// message more

const modalContainerMessage = document.querySelector(".js-modal-message");
const modalMore = document.querySelector(".js-modal-more");
const more = document.querySelector(".js-more");

function handleShowMore() {
  if (modalMore.closest(".text-more.js-modal-more.open")) {
    modalMore.classList.remove("open");
  } else {
    modalMore.classList.add("open");
  }
}

function hideMore() {
  modalMore.classList.remove("open");
}

more.addEventListener("click", handleShowMore);

modalMore.addEventListener("click", function (event) {
  event.stopPropagation();
});

// document.querySelector('.modal-massage.js-modal-message').addEventListener('click', handleShowMore)

// chat

const messageChat = document.querySelector('.js-message-chat')
const modalMessageChat = document.querySelector('.js-modal-message-chat')
const modalContainerChat = document.querySelector('.js-modal-container-chat')

function showMessageChat(){
  modalMessageChat.classList.add('open')
  // document.getElementsByClassName("modal-massage").style.backgroundColor = 'rgba(0, 0, 0, .5)';
  modalMessage.classList.add('background-black')

}
function hideMessageChat(){
  modalMessageChat.classList.remove('open')
  modalMessage.classList.remove('background-black')

}

modalContainerChat.addEventListener("click", function (event) {
  event.stopPropagation();
});

messageChat.addEventListener('click', showMessageChat)
// console.log(modalMessageChat)
modalMessageChat.addEventListener('click', console.log(1111))


