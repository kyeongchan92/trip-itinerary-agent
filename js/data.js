// ====================
// Location Data (Single Source of Truth)
// ====================

const places = {
    // 맛집
    food: [
        {
            id: 'xinglongju',
            name: '興隆居',
            nameKo: '싱롱쥐',
            lat: 22.6320,
            lng: 120.2940,
            area: 'hamasin',
            areaKo: '하마싱',
            category: 'dimsum',
            categoryEmoji: '🥟',
            categoryKo: '딤섬',
            hours: '05:30-12:30',
            desc: '딤섬, 찐빵'
        },
        {
            id: 'laojiang',
            name: '老江紅茶牛奶',
            nameKo: '라오장',
            lat: 22.6145,
            lng: 120.2986,
            area: 'hamasin',
            areaKo: '하마싱',
            category: 'dessert',
            categoryEmoji: '🧋',
            categoryKo: '음료',
            hours: '06:00-23:00',
            desc: '밀크티 원조'
        },
        {
            id: 'yangbaobao',
            name: '楊寶寶蒸餃',
            nameKo: '양바오바오',
            lat: 22.6352,
            lng: 120.2865,
            area: 'hamasin',
            areaKo: '하마싱',
            category: 'dimsum',
            categoryEmoji: '🥟',
            categoryKo: '딤섬',
            hours: '10:00-20:00',
            desc: '찐만두 맛집'
        },
        {
            id: 'yarouzhen',
            name: '鴨肉珍',
            nameKo: '야로우젠',
            lat: 22.6200,
            lng: 120.2850,
            area: 'hamasin',
            areaKo: '하마싱',
            category: 'noodle',
            categoryEmoji: '🦆',
            categoryKo: '면류',
            hours: '09:00-20:00',
            desc: '오리국수'
        },
        {
            id: 'cijin-seafood',
            name: '旗津海產街',
            nameKo: '치진 해산물거리',
            lat: 22.6115,
            lng: 120.2650,
            area: 'cijin',
            areaKo: '치진섬',
            category: 'seafood',
            categoryEmoji: '🦐',
            categoryKo: '해산물',
            hours: '11:00-21:00',
            desc: '싱싱한 해산물'
        },
        {
            id: 'duxiaoyue',
            name: '度小月',
            nameKo: '두샤오웨',
            lat: 22.6200,
            lng: 120.2800,
            area: 'boer',
            areaKo: '보얼',
            category: 'noodle',
            categoryEmoji: '🍜',
            categoryKo: '면류',
            hours: '11:00-21:00',
            desc: '단짜이미엔'
        },
        {
            id: 'ruifeng',
            name: '瑞豐夜市',
            nameKo: '루이펑',
            lat: 22.6700,
            lng: 120.2860,
            area: 'ruifeng',
            areaKo: '루이펑',
            category: 'nightmarket',
            categoryEmoji: '🌙',
            categoryKo: '야시장',
            hours: '17:00-00:00 (화목휴무)',
            desc: '현지인 야시장'
        },
        {
            id: 'liuhe',
            name: '六合夜市',
            nameKo: '리우허',
            lat: 22.6108,
            lng: 120.2983,
            area: 'hamasin',
            areaKo: '하마싱',
            category: 'nightmarket',
            categoryEmoji: '🌙',
            categoryKo: '야시장',
            hours: '17:00-02:00',
            desc: '관광객 야시장'
        }
    ],
    // 명소
    attractions: [
        {
            id: 'xiziwan',
            name: '西子灣',
            nameKo: '시즈완',
            lat: 22.6245,
            lng: 120.2656,
            area: 'sizwan',
            areaKo: '시즈완',
            category: 'attraction',
            categoryEmoji: '🌅',
            categoryKo: '명소',
            hours: '24시간 (석양 추천)',
            desc: '영국 영사관, 석양 명소'
        },
        {
            id: 'lianchitan',
            name: '蓮池潭',
            nameKo: '연지담',
            lat: 22.6469,
            lng: 120.2928,
            area: 'yeonjidam',
            areaKo: '연지담',
            category: 'attraction',
            categoryEmoji: '🏛️',
            categoryKo: '명소',
            hours: '24시간',
            desc: '용호탑, 춘추각, 호수 산책'
        },
        {
            id: 'cijin',
            name: '旗津島',
            nameKo: '치진섬',
            lat: 22.6120,
            lng: 120.2630,
            area: 'cijin',
            areaKo: '치진섬',
            category: 'attraction',
            categoryEmoji: '🏝️',
            categoryKo: '명소',
            hours: '24시간',
            desc: '등대, 해변, 해산물'
        },
        {
            id: 'pier2',
            name: '駁二藝術特區',
            nameKo: '보얼예술특구',
            lat: 22.6206,
            lng: 120.2816,
            area: 'boer',
            areaKo: '보얼',
            category: 'attraction',
            categoryEmoji: '🎨',
            categoryKo: '예술',
            hours: '10:00-21:00',
            desc: '예술 단지, 벽화 거리'
        },
        {
            id: 'meilidao',
            name: '美麗島站',
            nameKo: '메이리다오역',
            lat: 22.6316,
            lng: 120.3014,
            area: 'hamasin',
            areaKo: '하마싱',
            category: 'attraction',
            categoryEmoji: '🚇',
            categoryKo: '명소',
            hours: '06:00-00:00',
            desc: '세계 최고 아름다운 역'
        },
        {
            id: 'aihe',
            name: '愛河',
            nameKo: '아이허',
            lat: 22.6085,
            lng: 120.2865,
            area: 'hamasin',
            areaKo: '하마싱',
            category: 'nightview',
            categoryEmoji: '🌃',
            categoryKo: '야경',
            hours: '24시간 (야간 추천)',
            desc: '야경 명소'
        }
    ],
    // 기타 (지도 마커용)
    airport: [
        {
            id: 'khh',
            name: '高雄國際機場',
            nameKo: '가오슝 국제공항',
            lat: 22.5726,
            lng: 120.3390,
            desc: '✈️ TW651/TW652 도착·출발'
        }
    ],
    hotel: [
        {
            id: 'hotel',
            name: '숙소',
            nameKo: '시즈완/하마싱 근처',
            lat: 22.6250,
            lng: 120.2750,
            desc: '🏨 체크인 15:00 / 체크아웃 11:00'
        }
    ]
};

// 지도 마커용 (map.js에서 사용)
const locations = {
    airport: places.airport,
    attractions: places.attractions.map(p => ({
        name: `${p.name} (${p.nameKo})`,
        lat: p.lat,
        lng: p.lng,
        desc: p.desc
    })),
    food: places.food.map(p => ({
        name: `${p.name} (${p.nameKo})`,
        lat: p.lat,
        lng: p.lng,
        desc: p.desc
    })),
    night: places.food
        .filter(p => p.category === 'nightmarket')
        .concat(places.attractions.filter(p => p.category === 'nightview'))
        .concat([places.attractions.find(p => p.id === 'meilidao')])
        .filter(Boolean)
        .map(p => ({
            name: `${p.name} (${p.nameKo})`,
            lat: p.lat,
            lng: p.lng,
            desc: p.desc
        })),
    hotel: places.hotel.map(p => ({
        name: `${p.name} (${p.nameKo})`,
        lat: p.lat,
        lng: p.lng,
        desc: p.desc
    }))
};
