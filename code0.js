gdjs.MenuCode = {};
gdjs.MenuCode.localVariables = [];
gdjs.MenuCode.idToCallbackMap = new Map();
gdjs.MenuCode.GDRedButtonWithShadowObjects1= [];
gdjs.MenuCode.GDRedButtonWithShadowObjects2= [];
gdjs.MenuCode.GDDinoObjects1= [];
gdjs.MenuCode.GDDinoObjects2= [];
gdjs.MenuCode.GDbloquesolidoObjects1= [];
gdjs.MenuCode.GDbloquesolidoObjects2= [];
gdjs.MenuCode.GDarea_9595riesgoObjects1= [];
gdjs.MenuCode.GDarea_9595riesgoObjects2= [];
gdjs.MenuCode.GDtrigger_9595abajoObjects1= [];
gdjs.MenuCode.GDtrigger_9595abajoObjects2= [];


gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("RedButtonWithShadow"), gdjs.MenuCode.GDRedButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDRedButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDRedButtonWithShadowObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDRedButtonWithShadowObjects1[k] = gdjs.MenuCode.GDRedButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDRedButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Escena1", true);
}
}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDRedButtonWithShadowObjects1.length = 0;
gdjs.MenuCode.GDRedButtonWithShadowObjects2.length = 0;
gdjs.MenuCode.GDDinoObjects1.length = 0;
gdjs.MenuCode.GDDinoObjects2.length = 0;
gdjs.MenuCode.GDbloquesolidoObjects1.length = 0;
gdjs.MenuCode.GDbloquesolidoObjects2.length = 0;
gdjs.MenuCode.GDarea_9595riesgoObjects1.length = 0;
gdjs.MenuCode.GDarea_9595riesgoObjects2.length = 0;
gdjs.MenuCode.GDtrigger_9595abajoObjects1.length = 0;
gdjs.MenuCode.GDtrigger_9595abajoObjects2.length = 0;

gdjs.MenuCode.eventsList0(runtimeScene);
gdjs.MenuCode.GDRedButtonWithShadowObjects1.length = 0;
gdjs.MenuCode.GDRedButtonWithShadowObjects2.length = 0;
gdjs.MenuCode.GDDinoObjects1.length = 0;
gdjs.MenuCode.GDDinoObjects2.length = 0;
gdjs.MenuCode.GDbloquesolidoObjects1.length = 0;
gdjs.MenuCode.GDbloquesolidoObjects2.length = 0;
gdjs.MenuCode.GDarea_9595riesgoObjects1.length = 0;
gdjs.MenuCode.GDarea_9595riesgoObjects2.length = 0;
gdjs.MenuCode.GDtrigger_9595abajoObjects1.length = 0;
gdjs.MenuCode.GDtrigger_9595abajoObjects2.length = 0;


return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
