/**
 * Created by songfy on 2016/3/28.
 */


var teacher = {
    pic: ['image/teacher1.jpg', 'image/teacher2.jpg', 'image/teacher3.jpg', 'image/teacher4.jpg','image/teacher5.jpg', 'image/teacher1.jpg',
        'image/teacher2.jpg', 'image/teacher6.jpg'],
    name:
        ['邓超', '李晨', '郑爽', '刘恺威','范冰冰', '邓超', '李晨', '刘诗诗'],
    department: ['数学科学学院信息与计算科学系', '数学科学学院信息与计算科学系', '数学科学学院信息与计算科学系', '数学科学学院信息与计算科学系',
                  '数学科学学院信息与计算科学系1', '数学科学学院信息与计算科学系', '数学科学学院信息与计算科学系', '数学科学学院信息与计算科学系'],
    descript: ['任教java开发、数据库、数据分析,有着多年的教学经验', '任教java开发、数据库、数据分析,有着多年的教学经验', '任教java开发、数据库、数据分析,有着多年的教学经验', '任教java开发、数据库、数据分析,有着多年的教学经验',
                '任教java开发、数据库、数据分析,有着多年的教学经验1', '任教java开发、数据库、数据分析,有着多年的教学经验', '任教java开发、数据库、数据分析,有着多年的教学经验', '任教java开发、数据库、数据分析,有着多年的教学经验'],
    change: function (pic, name, department, descript) {
        console.log(pic.length);
        var HTML = '';
        for (var i = 0; i < pic.length; i++) {
            HTML +=  '<li>'+
                    '<div class="con">'+
                    '<a href="teacher_detail.html" target="_blank">' +
                    '<div class="pic" style="background-image: url(' + pic[i] + ')"></div>' +
                    '<p class="name">' + name[i] + '</p>' +
                    '</a>' +
                    '<p class="describe ellipsis-1">' + department[i] + '</p>' +
                    '<p class="subject ellipsis-2">' + descript[i] + '</p>'+
                    '</div>'+
                    '</li>';

        }
        $('.content').html(HTML);
    }
};
teacher.change(teacher.pic,teacher.name,teacher.department,teacher.descript);