<?php

namespace app\admin\model;

use think\Model;


class TestMain extends Model
{

    

    

    // 表名
    protected $name = 'test_main';
    
    // 自动写入时间戳字段
    protected $autoWriteTimestamp = false;

    // 定义时间戳字段名
    protected $createTime = false;
    protected $updateTime = false;
    protected $deleteTime = false;

    // 追加属性
    protected $append = [
        'test_status_text'
    ];
    

    
    public function getTestStatusList()
    {
        return ['0' => __('Test_status 0'), '1' => __('Test_status 1')];
    }


    public function getTestStatusTextAttr($value, $data)
    {
        $value = $value ? $value : (isset($data['test_status']) ? $data['test_status'] : '');
        $list = $this->getTestStatusList();
        return isset($list[$value]) ? $list[$value] : '';
    }




}
