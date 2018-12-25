//用于记录不同小人的点击次数
    var checktimes = [0,0,0,0,0,0,0,0,0,0,0,0,0]
//小人所对应的衣服
    var clothesUrl = [  ["http://www.tonlion.com/goods.php?id=623310025426"],
                        ["https://detail.tmall.com/item.htm?spm=a1z10.3-b-s.w4011-19077620180.31.3f953731WyLv4a&id=565111697703&rn=879c53be82a96d291ef7835ff1f8a456&abbucket=8"],
                        ["https://item.taobao.com/item.htm?spm=a230r.7195193.1997079397.22.6b544c78j3vq4h&id=534325482386&abbucket=17"],
                        ["https://item.taobao.com/item.htm?spm=a1z10.1-c.w4004-17909449760.4.2e2a26e38MPeQA&id=548030126252"],
                        ["https://item.taobao.com/item.htm?spm=a230r.7195193.1997079397.9.4852351cot0H4Z&id=536187181857&abbucket=17"],
                        ["https://item.jd.com/28023529349.html"],
                        ["http://www.yishion.net/nz/info_3.aspx?itemid=13227&parent&lcid=79"],
                        ["https://detail.tmall.com/item.htm?id=575567063626&spm=a230r.7195193.1997079397.10.66a7760epxv8tU&abbucket=17"],
                        ["https://www.zara.cn/cn/zh/%E6%97%A0%E8%A2%96%E7%89%9B%E4%BB%94%E8%BF%9E%E8%A1%A3%E8%A3%99-p00327203.html?v1=6797557&v2=1074757"],
                        ["https://item.taobao.com/item.htm?spm=a230r.7195193.1997079397.9.29234d8bZNcXyL&id=571558483035&abbucket=17"],
                        ["http://gouwu.360.cn/detail?id=75785613&qd=102"]
                        ["http://www.tonlion.com/goods.php?id=622321023413"],
                        ["http://www.banggo.com/goods/205858.shtml"],
                        ["http://item.moonbasa.com/p-013115216.html"],
                        ]
$(function () {

    var i = 1;
    var index = 13;
//    开头给所有图片设置监听
    for (i;i<=index;i++)
    {
        click(i)
    }

});
// 初始化函数
function init()
{
    var i=0;
    index = 13;
    index=checktimes.length;
    for(i;i<index;i++)
    {
        checktimes[i]=0;
    }

}

//点击函数用作点击时使用
function click(i) {
    $("#man"+i).click(function () {
        checktimes[i-1]++;
        console.log(i)
        k = i
        if(checktimes[i-1]==3)
        {
            console.log(checktimes[i])
            alert("you catch it !!")
            location.href=clothesUrl[k-1][0]
            init();
// checktimes[i-1]==Math.floor(Math.random()*4)||
        }
        skip();

    })
}
//进行随机跳转
function skip()
{
            /**
			 * 一下的代码用来测试，图片位置是否可以更换
			 * 测试成功，需要解决的问题是如何进行随机，且如何存放那么多的位置变量。
             */
			// $("#change").click(function () {
			// var x = $("#man1").position();
			// var y = $("#man4").position();
		 //
			// $("#man1").css搜索框1({'left':y.left,'top':y.top})
			// $("#man4").css搜索框1({'left':x.left,'top':x.top})
         //    })
		//

            // var a = $("#bg > *")
            // console.log(a) 有问题

             var index = 13
             var arr = [];
             var tarr = [];
             var position = [];

            /**
             * 此循环用来存储原来图片的位置
             */
            for(i=0;i<index;i++)
            {

                var str = "#man"+(i+1);
                position.push($(str).position())
                //这里你不得不注意，你加进去后，position[0]里也是一个数组，
                // 只不过只有一个，这个可能跟jQuery有关，认为加入东西都是加入伪数组的
            }
            // console.log(position)检测数组情况


            /**
             * 随机函数，进行数组的随机排列
             */
            function rond(index)
            {
                 // for(var i=0; i < index; i++)
                 // {<!--生成数组，保存序号 -->
                 //  arr[i] = i;
                 // //    生成了 0,1,2,3,4,5...
                 // }



                 var j = index;

                 for(var i=0; i<index; i++)
                 {<!--随机数组，图片随机 -->
                  var t = Math.floor(Math.random()*j);//生成随机位置t
                  j--;
                  tarr[i] = position.splice(t,1);
                 // 把arr中，位置t的数拿出来，给tarr[i]这样就完成了随机排布，这样
                 }
            }

            rond(13);
            // var c = tarr[0][0].left
            //有趣的地方，不是tarr[0]因为里面还是数组形式
            // console.log(tarr);

            /**
             * 激动人心，更改小人位置
             */
            for(i=0;i<index;i++)
            {
                var str = "#man"+(i+1);
                $(str).css({'left':tarr[i][0].left,'top':tarr[i][0].top})
            }


}

