'use strict';


var gulp = require('gulp');                        //��ȡgulp
var browsersync = require('browser-sync').create();//��ȡbrowsersync

//ɾ��distĿ¼���ļ�
var del=require('del');
gulp.task('clean',function(cb){
    return del(['dist/*'],cb);
})

//����js�ļ�
var uglify = require('gulp-uglify');               //jsѹ�����
var concat = require('gulp-concat');               //js�ϲ����
gulp.task('scripts', function() {
    gulp.src('js/*.js')               //��Ҫ������Դ�ļ�
        .pipe(uglify())               //ѹ��js�ļ�
        .pipe(concat('app.js'))       //��js�ļ��ϲ���app.js�ļ�
        .pipe(gulp.dest('dist/js'))   //�Ѳ����õ��ļ��ŵ�dist/jsĿ¼��
        .pipe(browsersync.stream());  //�ļ��и����Զ�ִ��
});

//����css�ļ�
var cssnano = require('gulp-cssnano');    //cssѹ�����
var less=require('gulp-less')             //less�ļ�����
gulp.task('style', function() {
    gulp.src('style/*.css')
	//.pipe(less())                     //����less�ļ�
        .pipe(cssnano())                  //cssѹ��
        .pipe(gulp.dest('dist/style'))
        .pipe(browsersync.stream());
});

var imagemin = require('gulp-imagemin');    //ͼƬѹ�����
gulp.task('image', function() {
    gulp.src('images/*.{png,jpg,jpeg,gif}')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
        .pipe(browsersync.stream());
});

var htmlmin = require('gulp-htmlmin');      //htmlѹ�����
gulp.task('html', function() {
    gulp.src('html/*.html')
        .pipe(htmlmin({
            collapseWhitespace: true,            //ѹ��html
            collapseBooleanAttributes: true,     //ʡ�Բ������Ե�ֵ
            removeComments: true,                //���htmlע��
            removeEmptyAttributes: true,         //ɾ�����пո���Ϊ����ֵ
            removeScriptTypeAttributes: true,    //ɾ��type=text/javascript
            removeStyleLinkTypeAttributes: true, //ɾ��type=text/css
            minifyJS:true,                       //ѹ��ҳ��js
            minifyCSS:true                       //ѹ��ҳ��css
        }))
        .pipe(gulp.dest('dist'))
        .pipe(browsersync.stream());
});

gulp.task('serve', ['clean'], function() {
    gulp.start('scripts','style','image','html');
    browsersync.init({
        port: 2016,
        server: {
            baseDir: ['dist']
        }
    });
    gulp.watch('js/*.js', ['scripts']);         //����ļ��仯���Զ�����
    gulp.watch('style/*.css', ['style']);
    gulp.watch('images/*.*', ['image']);
    gulp.watch('html/*.html', ['html']);
});

gulp.task('default',['serve']);
