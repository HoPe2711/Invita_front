export const template1 = `
        <style>
        .document-box {
            border-radius: 20px;
            height: auto;
            background-image: linear-gradient(to top, #00aaff, #4ebef9, #80d0f3, #afe0f0, #ddeef1);
            display: flex;
            padding: 20px;
            flex-direction: column;
            font-family: "Times New Roman", sans-serif ;
            font-size: 16px;
        }
        .document-card-container {
            display: flex;
            justify-content: center;
        }
        .document-title-part {
            margin-bottom: 50px;
        }
        .first-title-text {
            text-transform: uppercase;
            position: relative;
            text-align: center;
            width: 100%;
            font-weight: bold;
            font-size: 20px;
        }
        .title-logo {
            width: 200px;
        }
        .document-dear-text {
            font-weight: bold;
        }
        .document-gap-space {
            height: 20px;
        }
        .document-gap-space-mini {
            height: 5px;
        }
        .document-normal-text {}
        .document-greeting-text {}
        .document-main-part {}
        </style>
        <div class="document-box">
            <div class="document-title-part">
                <img class="title-logo" alt="" src='./assets/img/cmc-logo.png'/>
                <div class="first-title-text">
                    THƯ MỜI
                </div>
                <div class="first-title-text">
                    THAM DỰ TRAO ĐỔI CƠ HỘI CÔNG VIỆC VỊ TRÍ {{position}}
                </div>
            </div>
            <div class="document-main-part">
                <div class="document-dear-text">
                    Dear {{name}},
                </div>
                <div class="document-gap-space"></div>
                <div class="document-greeting-text">
                    Trước hết, CMC Technology & Solution (CTS) rất trân trọng và cảm ơn sự quan tâm {{vocative}} đã dành cho công ty.
                </div>
                <div class="document-gap-space"></div>
                <div class="document-main-content-text">
                    <span> Qua hồ sơ và thông tin trao đổi, chúng tôi nhận thấy sự phù hợp của {{vocative}} với vị trí {{position}} mà chúng tôi đang có nhu cầu tuyển dụng. Để giúp {{vocative}} hiểu thêm về CTS cũng như những chế độ - chính sách tại Công ty, chúng tôi mời {{vocative}} tham dự buổi trao đổi chính thức với những thông tin cụ thể như sau: </span>
                    <div class="document-gap-space-mini"></div>
                    <ul>
                        <li><b> Hình thức :</b> {{formOfExchange}} </li>
                        <li><b> Thời gian: </b> {{time}} </li>
                        <li><b> Địa điểm: </b> {{place}} </li>
                        <li>
                            <b> Đại diện CTS tham dự trao đổi: </b>
                            <ul>
                                {{#ctsRepresent}}
                                <li> {{.}} </li>
                                {{/ctsRepresent}}
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="document-gap-space"></div>
                <div class="document-main-content-text">
                    <span> <b> <i>  Khi tới tham dự  buổi trao đổi, {{vocative}} chú ý: </i> </b></span>
                    <div class="document-gap-space-mini"></div>
                    <ul>
                        {{#attentionInfo}}
                        <li> {{.}} </li>
                        {{/attentionInfo}}
                    </ul>
                </div>
                <div class="document-gap-space"></div>
                <div class="document-main-content-text">
                    <span> {{upperCaseVocative}} vui lòng trả lời email này để xác nhận {{vocative}} sẽ tham dự buổi trao đổi. Nếu có bất kì điều gì bất tiện, {{vocative}} có thể liên hệ ngay qua email này hoặc qua {{supportPerson}}  để được hỗ trợ. </span>
                </div>
                <div class="document-gap-space"></div>
                <div class="document-main-content-text">
                    <span> <i> Chúng tôi mong sớm được gặp {{vocative}} tại buổi trao đổi. </i> </span>
                </div>
                <div class="document-main-content-text">
                    <span> <b> Trân trọng. </b> </span>
                </div>
            </div>
        </div>
`;


export const template2 = `
        <style>
        .document-box {
            border-radius: 20px;
            height: auto;
            background-image: linear-gradient(to top, #00aaff, #4ebef9, #80d0f3, #afe0f0, #ddeef1);
            display: flex;
            padding: 20px;
            flex-direction: column;
            font-family: "Times New Roman", sans-serif ;
            font-size: 16px;
        }
        .document-card-container {
            display: flex;
            justify-content: center;
        }
        .document-title-part {
            margin-bottom: 50px;
            width: 100%;
            text-align: center;
        }
        .first-title-text {
            text-transform: uppercase;
            position: relative;
            text-align: center;
            width: 100%;
            font-weight: bold;
            font-size: 20px;
        }
        .title-logo {
            width: 500px;
            margin-bottom: 50px;
        }
        .document-dear-text {
            font-weight: bold;
        }
        .document-gap-space {
            height: 20px;
        }
        .document-gap-space-mini {
            height: 5px;
        }
        .document-normal-text {}
        .document-greeting-text {}
        .document-main-part {}
        </style>
        <div class="document-box">
            <div class="document-title-part">
                <img class="title-logo" alt="" src='./assets/img/cmc-logo-2.png'/>
                <div class="first-title-text">
                    THƯ MỜI THAM DỰ TRAO ĐỔI CƠ HỘI CÔNG VIỆC VỊ TRÍ {{position}}
                </div>
            </div>
            <div class="document-main-part">
                <div class="document-dear-text">
                    Dear {{name}},
                </div>
                <div class="document-gap-space"></div>
                <div class="document-greeting-text">
                    Trước hết, CMC Technology & Solution (CTS) rất trân trọng và cảm ơn sự quan tâm {{vocative}} đã dành cho công ty.
                </div>
                <div class="document-gap-space"></div>
                <div class="document-main-content-text">
                    <span> Qua hồ sơ và thông tin trao đổi, chúng tôi nhận thấy sự phù hợp của {{vocative}} với vị trí {{position}} mà chúng tôi đang có nhu cầu tuyển dụng. Để giúp {{vocative}} hiểu thêm về CTS cũng như những chế độ - chính sách tại Công ty, chúng tôi mời {{vocative}} tham dự buổi trao đổi chính thức với những thông tin cụ thể như sau: </span>
                    <div class="document-gap-space-mini"></div>
                    <ul>
                        <li><b> Hình thức :</b> {{formOfExchange}} </li>
                        <li><b> Thời gian: </b> {{time}} </li>
                        <li><b> Địa điểm: </b> {{place}} </li>
                        <li>
                            <b> Đại diện CTS tham dự trao đổi: </b>
                            <ul>
                                {{#ctsRepresent}}
                                <li> {{.}} </li>
                                {{/ctsRepresent}}
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="document-gap-space"></div>
                <div class="document-main-content-text">
                    <span> <b> <i>  Khi tới tham dự  buổi trao đổi, {{vocative}} chú ý: </i> </b></span>
                    <div class="document-gap-space-mini"></div>
                    <ul>
                        {{#attentionInfo}}
                        <li> {{.}} </li>
                        {{/attentionInfo}}
                    </ul>
                </div>
                <div class="document-gap-space"></div>
                <div class="document-main-content-text">
                    <span> {{upperCaseVocative}} vui lòng trả lời email này để xác nhận {{vocative}} sẽ tham dự buổi trao đổi. Nếu có bất kì điều gì bất tiện, {{vocative}} có thể liên hệ ngay qua email này hoặc qua {{supportPerson}}  để được hỗ trợ. </span>
                </div>
                <div class="document-gap-space"></div>
                <div class="document-main-content-text">
                    <span> <i> Chúng tôi mong sớm được gặp {{vocative}} tại buổi trao đổi. </i> </span>
                </div>
                <div class="document-main-content-text">
                    <span> <b> Trân trọng. </b> </span>
                </div>
            </div>
        </div>
`;
export const listTemplate = [
    {
        templateName: 'Thư mời trao đổi công việc 1',
        templateContent: template1,
        fields: [
            'name',
            'position',
            'gender',
            'ctsRepresent',
            'formOfExchange',
            'place',
            'time',
            'attentionInfo',
            'supportPerson'
        ]
    },
    {
        templateName: 'Thư mời trao đổi công việc 2',
        templateContent: template2,
        fields: [
            'name',
            'position',
            'gender',
            'ctsRepresent',
            'formOfExchange',
            'place',
            'time',
            'attentionInfo',
            'supportPerson'
        ]
    }
]
