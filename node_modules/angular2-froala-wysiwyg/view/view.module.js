import { NgModule } from '@angular/core';
import { FroalaViewDirective } from './view.directive';
export var FroalaViewModule = (function () {
    function FroalaViewModule() {
    }
    FroalaViewModule.forRoot = function () {
        return { ngModule: FroalaViewModule, providers: [] };
    };
    FroalaViewModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [FroalaViewDirective],
                    exports: [FroalaViewDirective]
                },] },
    ];
    /** @nocollapse */
    FroalaViewModule.ctorParameters = function () { return []; };
    return FroalaViewModule;
}());
//# sourceMappingURL=view.module.js.map