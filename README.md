# CMC - Human Resource Invitation

![Product Gif](https://media.giphy.com/media/ZVik7pBtu9dNS/giphy.gif)


HRI (Human Resource Invitation) is a web-based application help HR staff create invitation for multiple purpose like: interview invitation, meeting invitation, ... Application help HR staff simplify the work need when creating a new invitation. 

This is front-end part of application which is written by Angular Frame Work, provide user an interface for manage and create their invitation. This project also provides administrators an interface for managing and creating new template for user.


 ## Table of Contents
 * [Main Technology](#main-technology)
 * [Versions](#versions)
 * [Quick Start](#quick-start)
 * [Browser Support](#browser-support)


## Main technology
[<img src="https://getbootstrap.com/docs/4.1/assets/img/bootstrap-stack.png" width="60" height="60" />](https://getbootstrap.com/docs/4.1/assets/img/bootstrap-stack.png)
[<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png" width="60" height="60" />](https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png)
[<img src="https://seeklogo.com/images/M/material-design-logo-8BAFEFE50B-seeklogo.com.png" width="60" height="60" />](https://seeklogo.com/images/M/material-design-logo-8BAFEFE50B-seeklogo.com.png)

 ## Versions

- 0.0.1: Provide user 2 templates for creating new documents, and a coding interface for administrators to create templates in HTML form.

## Quick start

1. Install NodeJs from [NodeJs Official Page](https://nodejs.org/en).
2. Install Yarn Package Manager from [Yarn Official Page](https://yarnpkg.com).
3. Open Terminal.
4. Go to your file project.
5. Run in terminal: ```yarn```.
7. After installing all dependencies by yarn, run command: ```yarn start```.
8. Navigate to: [http://localhost:4200/](http://localhost:4200/).

### What's included
```
Human Resource Invitation
.
├── CHANGELOG.md
├── Dockerfile
├── ISSUE_TEMPLATE.md
├── LICENSE.md
├── README.md
├── angular.json
├── browserslist
├── e2e
├── karma.conf.js
├── package.json
├── protractor.conf.js
├── src
│   ├── app
│   │   ├── app-guard.guard.spec.ts
│   │   ├── app-guard.guard.ts
│   │   ├── app.component.css
│   │   ├── app.component.html
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   ├── app.routing.ts
│   │   ├── components
│   │   │   └── invitation-filling
│   │   │       ├── invitation-filling.component.css
│   │   │       ├── invitation-filling.component.html
│   │   │       ├── invitation-filling.component.spec.ts
│   │   │       └── invitation-filling.component.ts
│   │   ├── constant
│   │   │   └── called-service.const.ts
│   │   ├── global.interceptor.spec.ts
│   │   ├── global.interceptor.ts
│   │   ├── layouts
│   │   │   └── admin-layout
│   │   │       ├── admin-layout.component.html
│   │   │       ├── admin-layout.component.scss
│   │   │       ├── admin-layout.component.spec.ts
│   │   │       ├── admin-layout.component.ts
│   │   │       ├── admin-layout.module.ts
│   │   │       └── admin-layout.routing.ts
│   │   ├── models
│   │   │   ├── login-info.ts
│   │   │   └── register-info.ts
│   │   ├── pages
│   │   │   ├── change-pass
│   │   │   │   ├── change-pass.component.css
│   │   │   │   ├── change-pass.component.html
│   │   │   │   ├── change-pass.component.spec.ts
│   │   │   │   ├── change-pass.component.ts
│   │   │   │   └── changePass.validator.ts
│   │   │   ├── confirm-email
│   │   │   │   ├── confirm-email.component.css
│   │   │   │   ├── confirm-email.component.html
│   │   │   │   ├── confirm-email.component.spec.ts
│   │   │   │   └── confirm-email.component.ts
│   │   │   ├── dashboard
│   │   │   │   ├── dashboard.component.html
│   │   │   │   └── dashboard.component.ts
│   │   │   ├── document-management
│   │   │   │   ├── document-management.component.css
│   │   │   │   ├── document-management.component.html
│   │   │   │   ├── document-management.component.spec.ts
│   │   │   │   └── document-management.component.ts
│   │   │   ├── forgot-pass
│   │   │   │   ├── forgot-pass.component.css
│   │   │   │   ├── forgot-pass.component.html
│   │   │   │   ├── forgot-pass.component.spec.ts
│   │   │   │   └── forgot-pass.component.ts
│   │   │   ├── icons
│   │   │   │   ├── icons.component.html
│   │   │   │   └── icons.component.ts
│   │   │   ├── invitation-creator
│   │   │   │   ├── htmlContent.ts
│   │   │   │   ├── invitation-creator.component.css
│   │   │   │   ├── invitation-creator.component.html
│   │   │   │   ├── invitation-creator.component.spec.ts
│   │   │   │   ├── invitation-creator.component.ts
│   │   │   │   ├── invitation-creator.service.spec.ts
│   │   │   │   └── invitation-template.list.ts
│   │   │   ├── login-page
│   │   │   │   ├── login-page.component.css
│   │   │   │   ├── login-page.component.html
│   │   │   │   ├── login-page.component.spec.ts
│   │   │   │   └── login-page.component.ts
│   │   │   ├── maps
│   │   │   │   ├── maps.component.html
│   │   │   │   └── maps.component.ts
│   │   │   ├── notifications
│   │   │   │   ├── notifications.component.html
│   │   │   │   └── notifications.component.ts
│   │   │   ├── register-page
│   │   │   │   ├── register-page.component.css
│   │   │   │   ├── register-page.component.html
│   │   │   │   ├── register-page.component.spec.ts
│   │   │   │   ├── register-page.component.ts
│   │   │   │   └── register.validators.ts
│   │   │   ├── reset-password
│   │   │   │   ├── reset-password.component.css
│   │   │   │   ├── reset-password.component.html
│   │   │   │   ├── reset-password.component.spec.ts
│   │   │   │   └── reset-password.component.ts
│   │   │   ├── table
│   │   │   │   ├── table.component.html
│   │   │   │   └── table.component.ts
│   │   │   ├── template-creator
│   │   │   │   ├── template-creator.component.css
│   │   │   │   ├── template-creator.component.html
│   │   │   │   ├── template-creator.component.spec.ts
│   │   │   │   └── template-creator.component.ts
│   │   │   ├── template-management
│   │   │   │   ├── template-management.component.css
│   │   │   │   ├── template-management.component.html
│   │   │   │   ├── template-management.component.spec.ts
│   │   │   │   └── template-management.component.ts
│   │   │   ├── typography
│   │   │   │   ├── typography.component.html
│   │   │   │   └── typography.component.ts
│   │   │   ├── upgrade
│   │   │   │   ├── upgrade.component.html
│   │   │   │   └── upgrade.component.ts
│   │   │   └── user
│   │   │       ├── user.component.html
│   │   │       └── user.component.ts
│   │   ├── services
│   │   │   ├── auth.service.ts
│   │   │   ├── document.service.ts
│   │   │   └── template.service.ts
│   │   ├── shared
│   ├── environments
│   │   ├── environment.prod.ts
│   │   └── environment.ts
│   ├── favicon.ico
│   ├── index.html
│   ├── main.ts
│   ├── polyfills.ts
│   ├── styles.scss
│   ├── test.ts
│   ├── tsconfig.app.json
│   ├── tsconfig.spec.json
│   └── typings.d.ts
├── tsconfig.json
├── tslint.json
└── yarn.lock
```
## Browser Support

At present, we officially aim to support the last two versions of the following browsers:

<img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/chrome.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/firefox.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/edge.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/safari.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/opera.png" width="64" height="64">

