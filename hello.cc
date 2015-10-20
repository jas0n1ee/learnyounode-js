#include "hello.h"

namespace demo {
    
    Nan::Persistent<v8::Function> Hello::constructor;
    
    Hello::Hello(int c) {
        _cam.open(c);
    }
    
    Hello::~Hello() {
    }
    
    void Hello::Init(v8::Local<v8::Object> exports) {
        Nan::HandleScope scope;
        
        // Prepare constructor template
        v8::Local<v8::FunctionTemplate> tpl = Nan::New<v8::FunctionTemplate>(New);
        tpl->SetClassName(Nan::New("Hello").ToLocalChecked());
        tpl->InstanceTemplate()->SetInternalFieldCount(1);
        
        // Prototype
        Nan::SetPrototypeMethod(tpl, "imshow", imshow);
        
        constructor.Reset(tpl->GetFunction());
        exports->Set(Nan::New("Hello").ToLocalChecked(), tpl->GetFunction());
    }
    
    void Hello::New(const Nan::FunctionCallbackInfo<v8::Value>& info) {
        
        if (info.IsConstructCall()) {
            // Invoked as constructor: `new Hello(...)`
            double value = info[0]->IsUndefined() ? 0 : info[0]->NumberValue();
            Hello* obj = new Hello(value);
            obj->Wrap(info.This());
            info.GetReturnValue().Set(info.This());
        } else {
            // Invoked as plain function `Hello(...)`, turn into construct call.
            const int argc = 1;
            v8::Local<v8::Value> argv[argc] = { info[0] };
            v8::Local<v8::Function> cons = Nan::New<v8::Function>(constructor);
            info.GetReturnValue().Set(cons->NewInstance(argc, argv));
        }
    }
    
    void Hello::imshow(const Nan::FunctionCallbackInfo<v8::Value>& args) {
        
        Hello* obj = ObjectWrap::Unwrap<Hello>(args.Holder());
        while(1)
        {
            Mat im;
            obj->_cam>>im;
            cv::imshow("test",im);
        }
        
        args.GetReturnValue().Set(0);
    }
}

