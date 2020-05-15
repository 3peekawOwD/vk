'use strict'

const apps = [
        [6121396, 'VK Admin', 'https://pp.userapi.com/c836324/v836324157/57e47/kmuk5kWubsA.jpg', 'VK Admin — приложение для администраторов сообществ. Общайтесь с клиентами и подписчиками от имени Ваших сообществ ВКонтакте, управляйте группой и отслеживайте статистику с мобильного телефона.', 330],
        [5776857, 'VK Admin (iOS)', 'https://pp.userapi.com/c831308/v831308960/d4af9/0o-EVdYjXmk.jpg', 'Приложение для организации обратной связи с клиентами, пользователями и подписчиками Ваших сообществ.', 330],
        [5256902, 'VK Live', 'https://pp.userapi.com/c637831/v637831651/1a1f8/qm4Rf9IX-dw.jpg', '', 132],
        [5676187, 'VK Live Android', 'https://pp.userapi.com/c638919/v638919892/28b52/kHZvh2UeXk8.jpg', '', 132],
        [5554806, 'Vinci', 'https://pp.userapi.com/c615828/v615828550/26d9c/Z7F5bOheDO8.jpg', 'Преображайте свои фотографии с помощью нейросетей и искусственного разума.', 308],
        [5530956, 'Prisma', 'https://pp.userapi.com/c633324/v633324499/3a9b0/8ZaEuKGfypU.jpg', 'Почувствуй себя художником! Преврати фотографии в уникальные произведения искусства:<br>— Фильтры в стиле художников<br>— Завораживающие фотоэффекты<br>— Делись шедеврами в одно нажатие', 288],
        [6334949, 'Клевер', 'https://pp.userapi.com/c841521/v841521530/7d187/IKobOsNO_lY.jpg', '', 132],
        [6378721, 'Клевер — игра с призами', 'https://pp.userapi.com/c841122/v841122545/7b5be/mjTfevye8ZY.jpg', '', 132],
        [3698024, 'Instagram', 'https://pp.userapi.com/c633227/v633227376/33212/KU3LDlKwxo0.jpg', 'Мобильное приложение для публикации фотографий.', 240],
        [2685278, 'Kate Mobile', 'https://pp.userapi.com/c412825/v412825174/6522/nEKTkD_Uqcg.jpg', 'ВКонтакте для Android', 132],
        [4083558, 'VFeed', 'https://pp.userapi.com/c613529/v613529371/16761/Mjwh_-ADFK8.jpg', 'VFeed для iphone', 132],
        [6146827, 'VK Me', 'https://vk.com/images/dquestion_a.png', '', 132],
        [3116505, 'VK API', 'https://pp.userapi.com/c840138/v840138345/787f9/ZTLHQaj4S7U.jpg', '', 132]
        [2274003, 'VK Android', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAV1BMVEVRgbj///9ciLzz9flOf7dCeLTj6fJKfbZEerW8y+A7dbKTrc/6+/3c4+5kjb7AzuKFo8qsv9m0xd1tk8F5m8Uvbq/r8PbV3+xzl8OMqM3M1+eetdSkutbMMbZnAAAE40lEQVRogc2ba6OyIAyAUUAITc1bWuf//85XSxPGRT0n4d1XpaeNucEYKAok6P8GZxneLVn2VzBO7sUtLfs6HyXeLdPbdV2mt+KedEfBOKnKOuaCcsYYIQQdknHAOIxTweO6rK54Lzh7DLHg7CDN8h8YF3FZGKyvgbuUCPYNpkQXLNWMDsB4aL+jKkCzdsAucPVtZVdhorKCs4aehZ2ENpkZjHN+JhchnmMTOMtPM/MiLM8M4OZkfSfhjQ6uTp3fRWgFwbj1wUVIYAAeTp/gt7BBBXeeFEao7RRw6knhUeVUBmdnxEmzEJZJ4EL44o7uVUjg0pvCo8rlCsaxPy5CMf6Arx4tPdr6+gFXHqLlKrz6gEtvH9MkrFzAWe3Rt0bvqhdw59W3Zu+awInXKR4nOZnBd69OPbr1fQYXXlLxKrSYwTffpr7NYH+p6S2vBIU8R+pJXtF6Ave+Ne5nsN/4MUeQCZz7BueBwVnul4vQtKFA5mUA4ZzyRVSDMC4L5bpnMumpMURMwdoCRkXykYeyqSL1PVFECz9iWN+4VqZwbAfzaySL7AQiggKyOb0pT01h0QomSK0cyFmEaWCwfokz19MNjUmiDM4klekFgi9KjuGqwsbVjcPUD3X0U/rbVJ0GCKagwnNwjp/q6E62dQ5+WgEzMNKYch2mjoFWvexehQPcgn9lDE6Oz4kn9h8nvf3ZsiVb5GFc3LjAwEXkqSKx6vMyWIBqlnkZ6QogBICfknMCc0hg/qOOMoYPN1gA35VLFeCZrLE6w9hSfnWB4WTJ36MVTIHbpZbFnAuMBHDPZNXLBmaNOuRuW0Q6wVwtPcoqW8FgemrbksoJhjFX2m9YwBR4ln3V7AbDOLGqbAazWn29s6/W3WACQ2PnBgtQC7caegusq3yjDnAL8oprs78BRlDlJTuawAIkB2eJcgtMoWPfqQ3MS/Cqw9Db4Lk+I8mTGsCFQHQAL7prwZtgmJZnYwNwF8cwpWxs9TfBiIHsGHWUGOI4NEzWu7cIO8Ag9UbRtdXBmmxVKLfBWtgfHazlzHFk+BJbcjgANiyj8c/DwFLN8neN52rYUbm4yXvASGzqZ5Kbk7wLTJD5GHZDflzkXWA9KO0kO0LIPrBh07JLnnbyTrAeRqB0xrYA+0e1F0zgYgRgSds2pphiPTTcC9YWF6pMcYq1cFU6iS1F7Qa7Hey9EOC5Hs9wfHxdDckmhRQwYkg3tyVLHQAjCjOkBkaE6bHGnC6OgJEYbB627iTgfj6yuPYhMKK9JYTJm7a79hQZpvkYeJxE/WcBWNtXj5nKEEcOgvWlpA4mcHVtrL4cBiNumEVY9YETcv0GGBGaa/a+KP5DckjWP+YZfKyIynh+Uc0JTvkZdEIdPBdRj5aNCUfNJVl+HVfQlDxXIslFM/Xv69WEUBr3zZAOZR/rXstYk36k1z/kD/h3RwNTsxizFDnYKoYXPkcDvg9DyHIY4v34p4kCH3gFO+ILdqgZ7Bg32MG196P6LgrUnJBFgdsxwjWgBGu5CdZkFKytKlwjmdfWOSyBgzULhmuPDNYQGmFP7qW1wAZr+vXT5swMbc7hGrvPb2Vn5lb2cM37UbDrClG4CxrRdCWFiS+j91xJeU11UYa4hPO2+PWv147IL64dfYz+h4tW/fuilaPG/j9eLTtXgoH/AXeFPYFPml+ZAAAAAElFTkSuQmCC', 'Официальное приложение VK', 132]
    ],
    utypes = [
        [0, 'Уведомления', 'notify', 'только для iframe-приложений'],
        [1, 'Друзья', 'friends'],
        [2, 'Фотографии', 'photos'],
        [3, 'Аудиозаписи', 'audio', 'доступ к API аудиозаписей ограничен'],
        [4, 'Видеозаписи', 'video'],
        [6, 'Истории', 'stories'],
        [7, 'Wiki-страницы', 'pages'],
        [8, 'Добавление в меню слева', 'menu', 'только для iframe-приложений'],
        [9, 'Быстрая публикация на стенах', 'wallmenu', 'устаревший параметр'],
        [10, 'Статус', 'status'],
        [11, 'Заметки', 'notes'],
        [12, 'Сообщения', 'messages', 'доступ к API сообщений ограничен'],
        [13, 'Стена', 'wall'],
        [15, 'Рекламные кабинеты', 'ads'],
        [16, 'Доступ в любое время', 'offline'],
        [17, 'Документы', 'docs'],
        [18, 'Группы', 'groups'],
        [19, 'Ответы', 'notifications'],
        [20, 'Статистика', 'stats'],
        [22, 'Электронная почта', 'email'],
        [23, 'Кабинеты рекламной сети', 'adsweb'],
        [24, 'Рекламные акции', 'leads', 'только для рекламных партнёров'],
        [26, 'Кабинеты биржи рекламы', 'exchange'],
        [27, 'Товары', 'market'],
        [28, 'Номер телефона', 'phone', 'только для сервисов и доверенных iframe-приложений']
    ],
    gtypes = [
        [0, 'Истории', 'stories'],
        [2, 'Фотографии', 'photos'],
        [12, 'Сообщения', 'messages'],
        [13, 'Стена', 'wall'],
        [17, 'Документы', 'docs'],
        [18, 'Администрирование', 'manage']
    ];


apps.map(app => apps_block.insertAdjacentHTML('beforeend', '<div class="app"><button onclick="auth(' + app[0] + ')" class="btn">' + app[1] + '</button><span><img src="' + app[2] + '" class="p_icon"><div class="desc"><p>' + (app[3] ? app[3] : 'Описание отсутствует') + '</p><p>ID приложения: ' + app[0] + '</p>Иконка в записях:<div class="icon" style="background-position: 0 -' + app[4] + 'px;"></div></div></span></div>'));

apps_block.insertAdjacentHTML('beforeend', '<div class="app"><button class="btn" id="settings">Настройки</button><span><div class="desc">Настройка прав, указание ID приложения, а также получение токена для группы</div></span></div>');

addPermissions(utypes, permissions);
addPermissions(gtypes, gpermissions);

settings.onclick = function() {
    showOptions(1);
};

close_button.onclick = function() {
    showOptions();
};

uncheck.onclick = function() {
    Array.prototype.slice.call(document.querySelectorAll('input[scope]')).map(check => check.checked = false);
};

submit.onclick = function() {
    if (token_type_user.checked) {
        var scope = document.querySelectorAll('#permissions > input:checked'),
            groups = 0;
    } else {
        var scope = document.querySelectorAll('#gpermissions > input:checked'),
            groups = 1;
    }
    let app = app_id.value;
    let group = group_id.value;
    if ((app && !groups) || (app && groups && group && scope.length)) {
        auth(app, Array.prototype.slice.call(scope).reduce((cc, sc) => cc + Math.pow(2, sc.getAttribute('scope')), 0), (groups ? group : ''));
        err_msg.style.display = 'none';
    } else {
        err_msg.style.display = 'block';
    }
};

document.onkeydown = function(e) {
    if (e.key == 'Escape') {
        showOptions();
    }
};


window.onclick = function(event) {
    if (event.target == myModal) {
        showOptions();
    }
};

window.EventTarget.prototype.addDelegatedListener = function(type, delegateSelector, listener) {
    this.addEventListener(type, function(event) {
        if (event.target && event.target.matches(delegateSelector)) {
            listener.call(event.target, event)
        }
    })
};

document.addDelegatedListener('change', 'input[type="radio"]', function(event) {
    if (token_type_user.checked) {
        permissions.style.display = offline_warning.style.display = 'block';
        gpermissions.style.display = group_block.style.display = 'none';
    } else {
        permissions.style.display = offline_warning.style.display = 'none';
        gpermissions.style.display = group_block.style.display = 'block';
    }
    err_msg.style.display = 'none';
})

function showOptions(d) {
    myModal.style.display = (d ? 'block' : 'none');
}

function addPermissions(arr, el) {
    arr.map(type => el.insertAdjacentHTML('beforeend', '<input type="checkbox" id="' + el.id + '_' + type[0] + '" class="pcheck" scope="' + type[0] + '" ' + (!type[3] ? 'checked' : '') + '><label for="' + el.id + '_' + type[0] + '" class="btn" title="' + type[2] + '' + (type[3] ? ' (' + type[3] + ')' : '') + '">' + type[1] + '</label>'));
}

function auth(app, scope = 1073737727, groups = false) {
    window.open('https://oauth.vk.com/authorize?client_id=' + app + '&scope=' + scope + '&redirect_uri=https://oauth.vk.com/blank.html&display=page&response_type=token' + (groups ? '&group_ids=' + groups.replace(/[^0-9\,]/gim, '') : '&revoke=1'));
}
