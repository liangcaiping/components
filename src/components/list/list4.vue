<template>
  <div class="content">
      <div>
        <h2>一、总则</h2>
        <div class="text">
          <p>1.1 愈见平台的所有权和运营权归愈见幸福（北京）教育科技有限公司所有。</p> 
          <p>1.2 用户在注册之前，应当仔细阅读本协议，并同意遵守本协议后方可成为注册用户。
            一旦注册成功，则用户与愈见平台之间自动形成协议关系，用户应当受本协议的约束。用户在使用特殊的服务或产品时，应当同意接受相关协议后方能使用。</p> 
          <p>1.3 本协议则可由愈见平台随时更新，用户应当及时关注并同意本站不承担通知义务。本站的通知、公告、声明或其它类似内容是本协议的一部分。</p>
        </div>
      </div>
      <div>
        <h2>二、服务内容</h2>
        <div class="text">
          <p>2.1 愈见平台的具体内容由本站根据实际情况提供。</p>
          <p>2.2 本站仅提供相关的网络服务，除此之外与相关网络服务有关的设备(如个人电脑、手机、及其他与接入互联网或移动网有关的装置)
            及所需的费用(如为接入互联网而支付的电话费及上网费、为使用移动网而支付的手机费)均应由用户自行负担。</p>
        </div>
      </div>
      <div>
        <h2>三、用户账号</h2>
        <div class="text">
          <p>用户有义务保证密码和帐号的安全，用户利用该密码和帐号所进行的一切活动引起的任何损失或损害，由用户自行承担全部责任，
            本站不承担任何责任。如用户发现帐号遭到未授权的使用或发生其他任何安全问题，
            应立即修改帐号密码并妥善保管，如有必要，请通知本站。因黑客行为或用户的保管疏忽导致帐号非法使用，本站不承担任何责任。</p>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: "list4"
  }
</script>

<style scoped>
  .content {
    width: 1100px;
    height: 100%;
    padding: 50px 70px 0;
    background-color: #fff;
  }
  .content>div {
    text-align: left;
  }
  .content>div h2 {
    font-size:24px;
    font-weight:500;
    color:rgba(51,51,51,1);
    line-height:33px;
  }
  .content>div .text {
    margin-top: 20px;
    margin-bottom: 40px;
  }
  .content>div .text p {
    font-size:16px;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:32px;
    margin-bottom: 20px;
  }
  .content>div .text p:last-child {
    margin-bottom: 0;
  }
</style>
