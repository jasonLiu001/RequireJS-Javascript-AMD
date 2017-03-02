require.config({
    //shim用于配置非AMD规范的模块
    shim: {
        //uncompatible-amd-module 为非AMD兼容模块对应的文件名
        'uncompatible-amd-module': {
            deps: ['jquery'],//非AMD兼容模块对应的依赖
            exports: 'uncompatible'//在非AMD兼容模块中外部可以调用的对象或方法名称
        }
    },
    baseUrl: 'libs',//每个模块所在的主目录
    //paths用于配置AMD规范的模块名称
    paths: {
        'jquery': 'jquery-3.1.1',//key:模块对外暴露的名称  value:对应文件名，不需要js后缀
        'customAMDModule': 'custom-amd-module'
    }
});

//依赖的名称，如:‘uncompatible-amd-module’对应的是shim节点或者paths节点对应的key部分
require(['jquery', 'uncompatible-amd-module', 'customAMDModule'], function ($, uncompatibleModule, customModule) {
    $('#name').text('get my way');
    var uncompatibleObject = new uncompatibleModule();
    console.log(uncompatibleObject.add(1, 2));

    var customModuleObject = customModule;
    console.log(customModuleObject.add(1, 2));
});