

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __loadTemplate = (this && this.__loadTemplate) || function(target, template) {
  target._annotation.template = template;
};
var __loadStyles = (this && this.__loadStyles) || function(target, styles) {
  target._annotation.styles = styles;
};
var core = require('@angular/core');
      
var s = require('scalaModule');

var config = s.angulate2.ext.rt.AngulateRuntimeSJSXConfig();
config.decorate = __decorate;
      
__decorate([core.Output(),__metadata('design:type',Object)],s.music_trainer.webapp.component.ExerciseList.prototype,'menuSelected',null);
s.music_trainer.webapp.component.ExerciseList = __decorate(s.music_trainer.webapp.component.ExerciseList_._decorators,s.music_trainer.webapp.component.ExerciseList);

__decorate([core.Input(),__metadata('design:type',String)],s.music_trainer.webapp.component.AnswerBox.prototype,'title',null);
__decorate([core.Input(),__metadata('design:type',String)],s.music_trainer.webapp.component.AnswerBox.prototype,'answerName',null);
__decorate([core.Input(),__metadata('design:type',Object)],s.music_trainer.webapp.component.AnswerBox.prototype,'options',null);
__decorate([core.Input(),__metadata('design:type',Boolean)],s.music_trainer.webapp.component.AnswerBox.prototype,'isValidated',null);
__decorate([core.Output(),__metadata('design:type',Object)],s.music_trainer.webapp.component.AnswerBox.prototype,'answerChanged',null);
s.music_trainer.webapp.component.AnswerBox = __decorate(s.music_trainer.webapp.component.AnswerBox_._decorators,s.music_trainer.webapp.component.AnswerBox);

__decorate([core.Output(),__metadata('design:type',Object)],s.music_trainer.webapp.component.ExerciseView.prototype,'returnMenu',null);
__decorate([core.ViewChild('answerslistid'), __metadata('design:type',Object)],s.music_trainer.webapp.component.ExerciseView.prototype,'answersForm',null);
s.music_trainer.webapp.component.ExerciseView = __decorate(s.music_trainer.webapp.component.ExerciseView_._decorators,s.music_trainer.webapp.component.ExerciseView);

__decorate([core.Input(),__metadata('design:type',String)],s.music_trainer.webapp.component.ExerciseItem.prototype,'title',null);
__decorate([core.Input(),__metadata('design:type',String)],s.music_trainer.webapp.component.ExerciseItem.prototype,'level',null);
__decorate([core.Input(),__metadata('design:type',String)],s.music_trainer.webapp.component.ExerciseItem.prototype,'content',null);
__decorate([core.Input(),__metadata('design:type',Number)],s.music_trainer.webapp.component.ExerciseItem.prototype,'optionId',null);
__decorate([core.Input(),__metadata('design:type',Object)],s.music_trainer.webapp.component.ExerciseItem.prototype,'menuEm',null);
__decorate([core.Input(),__metadata('design:type',String)],s.music_trainer.webapp.component.ExerciseItem.prototype,'instrument',null);
s.music_trainer.webapp.component.ExerciseItem = __decorate(s.music_trainer.webapp.component.ExerciseItem_._decorators,s.music_trainer.webapp.component.ExerciseItem);

s.angulate2.ext.dynamic.DynamicExtModule = __decorate(s.angulate2.ext.dynamic.DynamicExtModule_._decorators,s.angulate2.ext.dynamic.DynamicExtModule);

__decorate([core.Input(),],s.angulate2.ext.dynamic.XNgIncludeDirective.prototype,'xngInclude',null);
s.angulate2.ext.dynamic.XNgIncludeDirective = __decorate(s.angulate2.ext.dynamic.XNgIncludeDirective_._decorators.concat([__metadata('design:paramtypes',[require('@angular/core').ViewContainerRef,s.angulate2.ext.dynamic.DynamicComponentBuilder,s.angulate2.ext.dynamic.TemplateLoader])]),s.angulate2.ext.dynamic.XNgIncludeDirective);

__decorate([core.ViewChild('ev'), __metadata('design:type',Object)],s.music_trainer.webapp.AppComponent.prototype,'exerciseView',null);
s.music_trainer.webapp.AppComponent = __decorate(s.music_trainer.webapp.AppComponent_._decorators,s.music_trainer.webapp.AppComponent);

s.music_trainer.webapp.AppModule = __decorate(s.music_trainer.webapp.AppModule_._decorators,s.music_trainer.webapp.AppModule);

s.angulate2.ext.dynamic.DynamicComponentBuilder = __decorate(s.angulate2.ext.dynamic.DynamicComponentBuilder_._decorators.concat([__metadata('design:paramtypes',[require('@angular/compiler').JitCompiler])]),s.angulate2.ext.dynamic.DynamicComponentBuilder);

__decorate([core.Input(),__metadata('design:type',Boolean)],s.music_trainer.webapp.component.AnswersList.prototype,'isValidated',null);
__decorate([core.Input(),__metadata('design:type',Object)],s.music_trainer.webapp.component.AnswersList.prototype,'answersList',null);
s.music_trainer.webapp.component.AnswersList = __decorate(s.music_trainer.webapp.component.AnswersList_._decorators,s.music_trainer.webapp.component.AnswersList);

s.angulate2.ext.dynamic.TemplateLoader = __decorate(s.angulate2.ext.dynamic.TemplateLoader_._decorators.concat([__metadata('design:paramtypes',[require('@angular/http').Http])]),s.angulate2.ext.dynamic.TemplateLoader);


require('@angular/platform-browser-dynamic').platformBrowserDynamic().bootstrapModule(s.music_trainer.webapp.AppModule);
           