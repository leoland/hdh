!function(e,t){e.widget("ui.progressbar",{options:{value:0},min:0,max:100,_create:function(){this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min,"aria-valuemax":this.max,"aria-valuenow":this._value()}),this.valueDiv=e("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element),this._refreshValue()},destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.valueDiv.remove(),e.Widget.prototype.destroy.apply(this,arguments)},value:function(e){return e===t?this._value():(this._setOption("value",e),this)},_setOption:function(t,i){"value"===t&&(this.options.value=i,this._refreshValue(),this._trigger("change"),this._value()===this.max&&this._trigger("complete")),e.Widget.prototype._setOption.apply(this,arguments)},_value:function(){var e=this.options.value;return"number"!=typeof e&&(e=0),Math.min(this.max,Math.max(this.min,e))},_refreshValue:function(){var e=this.value();this.valueDiv.toggleClass("ui-corner-right",e===this.max).width(e+"%"),this.element.attr("aria-valuenow",e)}}),e.extend(e.ui.progressbar,{version:"1.8.6"})}(jQuery);