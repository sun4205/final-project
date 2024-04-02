const headerNavs = [
    {title :'한나강좌는', link : '#about'},
    {title : 'HTML', link : '#html'},
    {title : 'CSS', link : '#css'},
    {title : '커리큘럼', link : '#curriculum'},
    {title : '문의하기', link : '#contact' }
]

const $headerNavUl = document.querySelector('.header__nav ul');

for(const nav of headerNavs){
    const $li = document.createElement('li');
    $li.classList.add('header__nav-item');

    const $a = document.createElement('a');
    $a.textContent =nav.title;
    $a.setAttribute('href', nav.link);

    $li.appendChild($a);
    $headerNavUl.appendChild($li);
}

const aboutCards = [
    {
        title:'빠른강의',
        descs : [
            '군더더기 없는 진행으로',
        '여러분의 시간을 절약합니다.'
        ]
    },
    {   
        title : '손쉬운 학습',
        descs : [
            '강의 페이지를 활용해서',
        '편리하게 실습할 수 있습니다.'
        ]

    },
    {
        title : '플레이그라운드',
        descs : [
            '강의를 위해 제작한 도구가',
        '반복학습을 도와줍니다.'
        ]
    }
];

const $aboutDiv = document.querySelector('.about');

for (let i =0; i<aboutCards.length; i++){
    const card = aboutCards[i];

    const $div = document.createElement('div');
    $div.classList.add('about__card');

    const $h2 = document.createElement('h2');
    $h2.classList.add('about__title');
    $h2.classList.add('_'+([i]+1));
    $h2.textContent = card.title;

    const $p = document.createElement('p');
    $p.classList.add('about_text');
    
    for (const desc of card.descs){
        const $word = document.createElement('div');
        $word.textContent=desc;
        $p.appendChild($word);
    }

    $div.appendChild($h2);
    $div.appendChild($p);

    $aboutDiv.appendChild($div);
}