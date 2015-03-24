-- datatime  2014.11.25

-- 批处理下载大图 苏宁,天猫
-- 测试通过，如发现任何问题请与 MegaSu 联系 !- -

-- 使用

-- 安装nodejs后，在cmd中输入以下2条命令

-- Ctrl+R，运行输入框里输入cmd

-- 切换到当前程序目录，就是你当前脚本的文件夹
cd /d "E:\批量拿图片 - node"

-- 例子
-- 以下参数依次为： 程序目录 ， 处理苏宁的url (可多个链接)
-- 格式 @node "输出路径" 当前电商平台缩写 "url链接1" "url链接2" "url链接3" "..."
@node "E:\批量拿图片 - node" suning "http://product.suning.com/104016842.html" "http://product.suning.com/109658738.html"
@node "E:\批量拿图片 - node" tmall "http://detail.tmall.com/item.htm?spm=a220o.1000855.w4023-7716816529.4.BF7CmK&id=41702031430" "http://detail.tmall.com/item.htm?spm=a220o.1000855.1998025129.2.mYIEfd&id=41352850562&abbucket=_AB-M32_B17&rn=594d7e6f184b1e7bcb07548feb6b4c24&acm=03054.1003.1.115927&uuid=1GYUEgR0_mHeaDJVQkiYCAd3po/GpsszO&abtest=_AB-LR32-PR32&scm=1003.1.03054.ITEM_41352850562_115927&pos=2"

