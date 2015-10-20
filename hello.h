#ifndef HELLO_H
#define HELLO_H

#include <nan.h>
#include <opencv2/opencv.hpp>
#include <opencv2/highgui.hpp>
using namespace cv;
namespace demo {
    
    class Hello : public Nan::ObjectWrap {
    public:
        static void Init(v8::Local<v8::Object> exports);
        
    private:
        explicit Hello(int c = 0);
        ~Hello();
        
        static void New(const Nan::FunctionCallbackInfo<v8::Value>& info);
        static void imshow(const Nan::FunctionCallbackInfo<v8::Value>& info);
        static Nan::Persistent<v8::Function> constructor;
        VideoCapture _cam;
    };
    
}  // namespace demo

#endif
