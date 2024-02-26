create table if not exists t_video
(
    id                int auto_increment comment '主键'
        primary key,
    user_uuid         varchar(35)                         null comment '生成视频的用户 uuid',
    video_description varchar(1000)                       null comment '视频描述',
    video_url         varchar(255)                        null comment '视频 url',
    cover_url         varchar(255)                        null comment '封面 url',
    created_time      timestamp default CURRENT_TIMESTAMP null comment '创建时间'
)
    comment '视频表';

create table if not exists t_user
(
    id           int auto_increment comment '主键'
        primary key,
    uuid         varchar(35)                         null comment '用户唯一id',
    email        varchar(255)                        null comment '用户邮箱',
    nick_name    varchar(255)                        null comment '用户昵称',
    avatar_url   varchar(255)                        null comment '头像 url',
    created_time timestamp default CURRENT_TIMESTAMP null comment '创建时间'
)
    comment '用户表';

create table if not exists t_wait_list
(
    id           int auto_increment comment '主键'
        primary key,
    email        varchar(255)                        not null comment '邮箱',
    reserved1    varchar(255)                        null comment '保留1',
    reserved2    varchar(255)                        null comment '保留2',
    created_time timestamp default CURRENT_TIMESTAMP not null,
    update_time  timestamp                           null on update CURRENT_TIMESTAMP,
    constraint t_wait_list_pk2
        unique (id)
);



