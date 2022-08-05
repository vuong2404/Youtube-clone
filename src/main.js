const $ = document.querySelector.bind(document) ;
const $$ = document.querySelectorAll.bind(document)

const headerOption = $(".header-option") ;
const sidebar = $(".sidebar")

const sidebarExtendTabs = $(".sidebar-extend__tabs")
const subscribedList = $('.subscribed-list')


const app = {
    
    renderVideos: function() {

        const htmls = this.videos.map((video, index) => {
          return `
      <a href="" class="video-link col l-3">
          <div class="video-img" style="background-image: url(${video.image});"></div>
          <div class="video-details">
              <img src="${video.channelImage}" alt="" class="channel-img">
              <div class="video-description">
                  <p class="video-name">${video.name}</p>
                  <p class="channel-name">${video.channel}</p>
                  <span class="view-totals">${video.totalView} lượt xem</span>
                  <span class="time-upload">2 giờ trước</span>
              </div>
          </div>
       </a>
          `
           })
        $(".list-videos").innerHTML = htmls.join('');
    },
    renderSuscribedChannel: function() {
        this.hostingOnLiveStreamChannels() ;

        let num = 0 ;
        const html = this.channels.map((channel, index) =>
        {
            if(channel.isSubscribe)
            {
                let tmp = ` 
                <a href="" class="sidebar-extend__tab--link">
                <button class="sidebar-extend__tab--btn">
                    <div class="sidebar--icon">
                        <img src="${channel.image}" alt="" class="sidebar-extend__tab--img">
                    </div>
                    <p class="sidebar-extend__tab--name sidebar-extend__channel-name">${channel.name}</p>
            ` 
                if(channel.currentState === 'live') {
                    tmp += `
                    <div class="sidebar-extend__channel-state">
                    <svg  width="16px" height="16px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        
                    <title>ic_fluent_live_24_filled</title>
                    <desc>Created with Sketch.</desc>
                    <g id="🔍-Product-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="ic_fluent_live_24_filled" fill="red" fill-rule="nonzero">
                            <path d="M6.34277267,4.93867691 C6.73329697,5.3292012 6.73329697,5.96236618 6.34277267,6.35289047 C3.21757171,9.47809143 3.21757171,14.5450433 6.34277267,17.6702443 C6.73329697,18.0607686 6.73329697,18.6939336 6.34277267,19.0844579 C5.95224838,19.4749821 5.3190834,19.4749821 4.92855911,19.0844579 C1.02230957,15.1782083 1.02230957,8.84492646 4.92855911,4.93867691 C5.3190834,4.54815262 5.95224838,4.54815262 6.34277267,4.93867691 Z M19.0743401,4.93867691 C22.9805896,8.84492646 22.9805896,15.1782083 19.0743401,19.0844579 C18.6838158,19.4749821 18.0506508,19.4749821 17.6601265,19.0844579 C17.2696022,18.6939336 17.2696022,18.0607686 17.6601265,17.6702443 C20.7853275,14.5450433 20.7853275,9.47809143 17.6601265,6.35289047 C17.2696022,5.96236618 17.2696022,5.3292012 17.6601265,4.93867691 C18.0506508,4.54815262 18.6838158,4.54815262 19.0743401,4.93867691 Z M9.3094225,7.81205295 C9.69994679,8.20257725 9.69994679,8.83574222 9.3094225,9.22626652 C7.77845993,10.7572291 7.77845993,13.2394099 9.3094225,14.7703724 C9.69994679,15.1608967 9.69994679,15.7940617 9.3094225,16.184586 C8.91889821,16.5751103 8.28573323,16.5751103 7.89520894,16.184586 C5.58319778,13.8725748 5.58319778,10.1240641 7.89520894,7.81205295 C8.28573323,7.42152866 8.91889821,7.42152866 9.3094225,7.81205295 Z M16.267742,7.81205295 C18.5797531,10.1240641 18.5797531,13.8725748 16.267742,16.184586 C15.8772177,16.5751103 15.2440527,16.5751103 14.8535284,16.184586 C14.4630041,15.7940617 14.4630041,15.1608967 14.8535284,14.7703724 C16.384491,13.2394099 16.384491,10.7572291 14.8535284,9.22626652 C14.4630041,8.83574222 14.4630041,8.20257725 14.8535284,7.81205295 C15.2440527,7.42152866 15.8772177,7.42152866 16.267742,7.81205295 Z M12.0814755,10.5814755 C12.9099026,10.5814755 13.5814755,11.2530483 13.5814755,12.0814755 C13.5814755,12.9099026 12.9099026,13.5814755 12.0814755,13.5814755 C11.2530483,13.5814755 10.5814755,12.9099026 10.5814755,12.0814755 C10.5814755,11.2530483 11.2530483,10.5814755 12.0814755,10.5814755 Z" id="🎨-Color"></path>
                        </g>
                    </g>
                    
                </svg> 
                    </div>`
                } 
                else if (channel.currentState === 'active') {
                   tmp+= `
                   <div class="sidebar-extend__channel-state">
                        <svg width="8px" height="8px" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="4" cy="4" r="4" fill="#3ea6ff"/>
                        </svg>
                    </div>
                    `
                }
                tmp += '</button>\n</a>' 
                return tmp ;
                num++ ; 
            }
        })

        

        console.log(html)

        subscribedList.innerHTML = html.join('') ;
    },


    DefineProperties: function() {

    },

    //Xử lý sự kiện
    handleEvents: function() {

        // Extend/Narrow sidebar
        headerOption.onclick = function() {
            if(sidebar.classList.contains("on-extend")){
                sidebar.classList.remove("on-extend")
                sidebar.classList.add("on-narrow")
            } else if (sidebar.classList.contains("on-narrow")) {
                sidebar.classList.remove("on-narrow")
                sidebar.classList.add("on-extend")
            }
        }

    },

    // Chuyển các kênh đang livestream lên phía trên
    hostingOnLiveStreamChannels: function() {
        let l = 0, r = this.channels.length - 1 ; 
        while (l < r) {
            if (this.channels[r].currentState === 'live') {
                let tmp = this.channels[l] ;
                this.channels[l] = this.channels[r] ;
                this.channels[r] = tmp ;
                l++ ;
            } else r--;
        }
    },

    start: function() {
        this.renderVideos() ;
        this.renderSuscribedChannel();


        this.handleEvents();
    },
}


app.videos =  [
    {
        id: 1 ,
        name:   "Có nên ngủ trưa hay không theo Khoa học?",
        channel: "KIẾN THỨC THÚ VỊ Official",
        image: "./assets/img/video1.webp",
        totalView: 123,
        timeUploaded: "15/7/2022",
        channelImage: "./assets/img/channel1.jpg"
    },
    {
        id: 2 ,
        name:   "Cuộc Phiêu Lưu Của Văn-Gốc",
        channel: "Thanh Pahm",
        image: "./assets/img/video2.webp",
        totalView: 1254123,
        timeUploaded: "15/7/2022",
        channelImage: "./assets/img/channel2.jpg"
    },
    {
        id: 3 ,
        name:   "Đen - một triệu like ft. Thành Đồng (M/V)",
        channel: "Đen Vâu Offical",
        image: "./assets/img/video3.webp",
        totalView: 912546213,
        timeUploaded: "15/7/2022",
        channelImage: "./assets/img/channel3.jpg"
    },
    {
        id: 4 ,
        name:   "TẤT TẦN TẬT VỀ DC VÀ MARVEL TẠI COMIC-CON 2022",
        channel: "Phê Phim",
        image: "./assets/img/video4.webp",
        totalView: 12321,
        timeUploaded: "15/7/2022",
        channelImage: "./assets/img/channel4.jpg"
    },
    {
        id: 5 ,
        name:   "4 Tuyệt Kỹ ĐỐI NHÂN XỬ THẾ",
        channel: "Web5Ngay",
        image: "./assets/img/video5.webp",
        totalView: 123164545,
        timeUploaded: "15/7/2022",
        channelImage: "./assets/img/channel5.jpg"
    },
    {
        id: 6 ,
        name:   "Lesson 59: TOXIC FRIEND - Những dấu hiệu bất ngờ, ngỡ ngàng, ngơ ngác và bật ngửa! | Nguyễn Hữu Trí",
        channel: "Nguyễn Hữu Trí",
        image: "./assets/img/video6.webp",
        totalView: 123,
        timeUploaded: "15/7/2022",
        channelImage: "./assets/img/channel6.jpg"
    },
    {
        id: 7 ,
        name:   "Bữa tiệc nấu theo cách của người Nùng - Bắc Hà Du Ký #4 |Du lịch ẩm thực Việt Nam",
        channel: "Khoai Lang Thang",
        image: "./assets/img/video7.webp",
        totalView: 123,
        timeUploaded: "15/7/2022",
        channelImage: "./assets/img/channel7.jpg"
    },
    {
        id: 8 ,
        name:   "Nhìn Những Mùa Thu Đi - Những Bản Acoustic Nhẹ Nhàng Thư Giãn",
        channel: "TaLaGio",
        image: "./assets/img/video8.webp",
        totalView: 123,
        timeUploaded: "15/7/2022",
        channelImage: "./assets/img/channel8.jpg"
    },
    {
        id: 1 ,
        name:   "Có nên ngủ trưa hay không theo Khoa học?",
        channel: "KIẾN THỨC THÚ VỊ Official",
        image: "./assets/img/video1.webp",
        totalView: 123,
        timeUploaded: "15/7/2022",
        channelImage: "./assets/img/channel1.jpg"
    },
    {
        id: 2 ,
        name:   "Cuộc Phiêu Lưu Của Văn-Gốc",
        channel: "Thanh Pahm",
        image: "./assets/img/video2.webp",
        totalView: 1254123,
        timeUploaded: "15/7/2022",
        channelImage: "./assets/img/channel2.jpg"
    },
    {
        id: 3 ,
        name:   "Đen - một triệu like ft. Thành Đồng (M/V)",
        channel: "Đen Vâu Offical",
        image: "./assets/img/video3.webp",
        totalView: 912546213,
        timeUploaded: "15/7/2022",
        channelImage: "./assets/img/channel3.jpg"
    },
    {
        id: 4 ,
        name:   "TẤT TẦN TẬT VỀ DC VÀ MARVEL TẠI COMIC-CON 2022",
        channel: "Phê Phim",
        image: "./assets/img/video4.webp",
        totalView: 12321,
        timeUploaded: "15/7/2022",
        channelImage: "./assets/img/channel4.jpg"
    },
    {
        id: 7 ,
        name:   "Bữa tiệc nấu theo cách của người Nùng - Bắc Hà Du Ký #4 |Du lịch ẩm thực Việt Nam",
        channel: "Khoai Lang Thang",
        image: "./assets/img/video7.webp",
        totalView: 123,
        timeUploaded: "15/7/2022",
        channelImage: "./assets/img/channel7.jpg"
    },
    {
        id: 6 ,
        name:   "Lesson 59: TOXIC FRIEND - Những dấu hiệu bất ngờ, ngỡ ngàng, ngơ ngác và bật ngửa! | Nguyễn Hữu Trí",
        channel: "Nguyễn Hữu Trí",
        image: "./assets/img/video6.webp",
        totalView: 123,
        timeUploaded: "15/7/2022",
        channelImage: "./assets/img/channel6.jpg"
    },
    {
        id: 5 ,
        name:   "4 Tuyệt Kỹ ĐỐI NHÂN XỬ THẾ",
        channel: "Web5Ngay",
        image: "./assets/img/video5.webp",
        totalView: 123164545,
        timeUploaded: "15/7/2022",
        channelImage: "./assets/img/channel5.jpg"
    },
    {
        id: 8 ,
        name:   "Nhìn Những Mùa Thu Đi - Những Bản Acoustic Nhẹ Nhàng Thư Giãn",
        channel: "TaLaGio",
        image: "./assets/img/video8.webp",
        totalView: 123,
        timeUploaded: "15/7/2022",
        channelImage: "./assets/img/channel8.jpg"
    },
]

app.channels = [
    {
        name: "Kiến Thức Thú Vị Offical",
        image: "./assets/img/channel1.jpg",
        listVideo: [], 
        total_subscribers: 0,
        isSubscribe: true,
        currentState: 'active',
    },
    {
        name: "Thanh Pahm",
        image: "./assets/img/channel2.jpg",
        listVideo: [], 
        total_subscribers: 0,
        isSubscribe: true,
        currentState: '',
    },
    {
        name: "Đen Vâu Offical",
        image: "./assets/img/channel3.jpg",
        listVideo: [], 
        total_subscribers: 0,
        isSubscribe: true,
        currentState: 'live',
    },
    {
        name: "Phê Phim",
        image: "./assets/img/channel4.jpg",
        listVideo: [], 
        isSubscribe: false,
        total_subscribers: 0,
        currentState: 'active',
    },
    {
        name: "Web5Ngay",
        image: "./assets/img/channel5.jpg",
        listVideo: [], 
        isSubscribe: true,
        total_subscribers: 0,
        currentState: 'live',
    },
    {
        name: "Nguyễn Hữu Trí",
        image: "./assets/img/channel6.jpg",
        listVideo: [], 
        isSubscribe: true,
        total_subscribers: 0,
        currentState: 'active',
    },
    {
        name: "Khoai Lang Thang",
        image: "./assets/img/channel7.jpg",
        listVideo: [], 
        isSubscribe: true,
        total_subscribers: 0,
        currentState: 'live',
    },
    {
        name: "TaLaGio",
        image: "./assets/img/channel8.jpg",
        listVideo: [], 
        isSubscribe: false,
        total_subscribers: 0,
        currentState: 'active',
    },
]


app.start() ;