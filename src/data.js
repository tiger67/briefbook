import manager from "@/views/sign/common/userManager.js"
let user = manager.getUser();
//console.log(user);
export default {
  isSignIned: user.appId ? true : false,
  hasEdit: false,
  showPopSign: false,
  u: user,
  afterSigninRun: null
}
