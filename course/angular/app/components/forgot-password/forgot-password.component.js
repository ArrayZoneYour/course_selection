class ForgotPasswordController {
    constructor(API, ToastService, $state) {
        'ngInject';

        this.API = API;
        this.$state = $state;
        this.ToastService = ToastService;
    }

    $onInit(){
        this.student_id = '';
    }

    submit() {
        this.email = this.student_id + '@hust.edu.cn';
        this.API.all('auth/password/email').post({
            email: this.email
        }).then(() => {
            this.ToastService.show(`请检查你的学号对应邮箱，重置密码的邮件已经发送`);
            this.$state.go('app.landing');
        });
    }
}

export const ForgotPasswordComponent = {
    templateUrl: './views/app/components/forgot-password/forgot-password.component.html',
    controller: ForgotPasswordController,
    controllerAs: 'vm',
    bindings: {}
}
