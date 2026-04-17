gdjs.GameOverCode = {};
gdjs.GameOverCode.localVariables = [];
gdjs.GameOverCode.idToCallbackMap = new Map();
gdjs.GameOverCode.GDBlackDecoratedButtonObjects1= [];
gdjs.GameOverCode.GDBlackDecoratedButtonObjects2= [];
gdjs.GameOverCode.GDDinoObjects1= [];
gdjs.GameOverCode.GDDinoObjects2= [];
gdjs.GameOverCode.GDbloquesolidoObjects1= [];
gdjs.GameOverCode.GDbloquesolidoObjects2= [];
gdjs.GameOverCode.GDarea_9595riesgoObjects1= [];
gdjs.GameOverCode.GDarea_9595riesgoObjects2= [];
gdjs.GameOverCode.GDtrigger_9595abajoObjects1= [];
gdjs.GameOverCode.GDtrigger_9595abajoObjects2= [];


gdjs.GameOverCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BlackDecoratedButton"), gdjs.GameOverCode.GDBlackDecoratedButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameOverCode.GDBlackDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.GameOverCode.GDBlackDecoratedButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameOverCode.GDBlackDecoratedButtonObjects1[k] = gdjs.GameOverCode.GDBlackDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.GameOverCode.GDBlackDecoratedButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", true);
}
}

}


};

gdjs.GameOverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameOverCode.GDBlackDecoratedButtonObjects1.length = 0;
gdjs.GameOverCode.GDBlackDecoratedButtonObjects2.length = 0;
gdjs.GameOverCode.GDDinoObjects1.length = 0;
gdjs.GameOverCode.GDDinoObjects2.length = 0;
gdjs.GameOverCode.GDbloquesolidoObjects1.length = 0;
gdjs.GameOverCode.GDbloquesolidoObjects2.length = 0;
gdjs.GameOverCode.GDarea_9595riesgoObjects1.length = 0;
gdjs.GameOverCode.GDarea_9595riesgoObjects2.length = 0;
gdjs.GameOverCode.GDtrigger_9595abajoObjects1.length = 0;
gdjs.GameOverCode.GDtrigger_9595abajoObjects2.length = 0;

gdjs.GameOverCode.eventsList0(runtimeScene);
gdjs.GameOverCode.GDBlackDecoratedButtonObjects1.length = 0;
gdjs.GameOverCode.GDBlackDecoratedButtonObjects2.length = 0;
gdjs.GameOverCode.GDDinoObjects1.length = 0;
gdjs.GameOverCode.GDDinoObjects2.length = 0;
gdjs.GameOverCode.GDbloquesolidoObjects1.length = 0;
gdjs.GameOverCode.GDbloquesolidoObjects2.length = 0;
gdjs.GameOverCode.GDarea_9595riesgoObjects1.length = 0;
gdjs.GameOverCode.GDarea_9595riesgoObjects2.length = 0;
gdjs.GameOverCode.GDtrigger_9595abajoObjects1.length = 0;
gdjs.GameOverCode.GDtrigger_9595abajoObjects2.length = 0;


return;

}

gdjs['GameOverCode'] = gdjs.GameOverCode;
