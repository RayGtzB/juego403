gdjs.Escena2Code = {};
gdjs.Escena2Code.localVariables = [];
gdjs.Escena2Code.idToCallbackMap = new Map();


gdjs.Escena2Code.eventsList0 = function(runtimeScene) {

};

gdjs.Escena2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();


gdjs.Escena2Code.eventsList0(runtimeScene);


return;

}

gdjs['Escena2Code'] = gdjs.Escena2Code;
