create table t_user
(
    id           int auto_increment comment '主键id'
        primary key,
    uuid         varchar(36)                         null comment '用户唯一id',
    email        varchar(255)                        null comment '用户邮箱',
    nick_name    varchar(255)                        null comment '用户昵称',
    avatar_url   varchar(500)                        null comment '头像 url',
    created_time timestamp default CURRENT_TIMESTAMP null comment '创建时间'
)
    comment '用户表';

create table t_video
(
    id           int auto_increment comment '主键 id'
        primary key,
    user_uuid    varchar(36)                         null comment '生成视频的用户 uuid',
    uuid         varchar(36)                         not null comment '视频 uuid',
    prompt       varchar(1000)                       null comment '视频描述',
    prompt_type  varchar(63)                         null comment '描述类型 Text | Image',
    video_url          varchar(1000)                       null comment '视频 url',
    thumbnail_url    varchar(1000)                       null comment '缩略图 url',
    source_name  varchar(36)                         null comment '生成源',
    source_url   varchar(255)                        null comment '生成源url',
    created_time timestamp default CURRENT_TIMESTAMP null comment '创建时间',
    constraint t_video_pk
        unique (uuid)
)
    comment '视频表';

create table t_wait_list
(
    id           int auto_increment comment '主键'
        primary key,
    email        varchar(255)                        not null comment '邮箱',
    reserved1    varchar(255)                        null comment '保留1',
    reserved2    varchar(255)                        null comment '保留2',
    created_time timestamp default CURRENT_TIMESTAMP not null  comment '创建时间',
    constraint t_wait_list_pk2
        unique (id)
)
    comment 'waitlist';;

