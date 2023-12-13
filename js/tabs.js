// function changeTab(tabId) {
//     const tabs = document.querySelectorAll('.tab-content');
//     tabs.forEach(tab => {
//         tab.classList.remove('active');
//     });

//     const selectedTab = document.getElementById(tabId);
//     selectedTab.classList.add('active');
// }

// document.getElementById('tab1Btn').addEventListener('click', function () {
//     changeTab('tab1');
// });

// document.getElementById('tab2Btn').addEventListener('click', function () {
//     changeTab('tab2');
// });

// document.getElementById('tab3Btn').addEventListener('click', function () {
//     changeTab('tab3');
// });

function changeTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
      tab.classList.remove('active');
    });

    const selectedTab = document.getElementById(tabId);
    selectedTab.classList.add('active');

    // Убираем активный класс у всех кнопок
    document.querySelectorAll('.tab__item-btn').forEach(btn => {
      btn.classList.remove('tab__item-btn--active');
    });

    // Добавляем активный класс только к нажатой кнопке
    document.getElementById(`${tabId}Btn`).classList.add('tab__item-btn--active');
  }

  document.getElementById('tab1Btn').addEventListener('click', function () {
    changeTab('tab1');
  });

  document.getElementById('tab2Btn').addEventListener('click', function () {
    changeTab('tab2');
  });

  document.getElementById('tab3Btn').addEventListener('click', function () {
    changeTab('tab3');
  });
