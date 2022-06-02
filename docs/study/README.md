
<!-- toc -->

- [一、基础](#%E4%B8%80%E5%9F%BA%E7%A1%80)
  - [1. 数据结构&算法](#1-%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E7%AE%97%E6%B3%95)
    - [反转单向链表](#%E5%8F%8D%E8%BD%AC%E5%8D%95%E5%90%91%E9%93%BE%E8%A1%A8)
    - [非递归实现后序遍历](#%E9%9D%9E%E9%80%92%E5%BD%92%E5%AE%9E%E7%8E%B0%E5%90%8E%E5%BA%8F%E9%81%8D%E5%8E%86)
    - [两个栈实现一个队列](#%E4%B8%A4%E4%B8%AA%E6%A0%88%E5%AE%9E%E7%8E%B0%E4%B8%80%E4%B8%AA%E9%98%9F%E5%88%97)
    - [基本排序，哪些是稳定的](#%E5%9F%BA%E6%9C%AC%E6%8E%92%E5%BA%8F%E5%93%AA%E4%BA%9B%E6%98%AF%E7%A8%B3%E5%AE%9A%E7%9A%84)
  - [2. 计算机网络](#2-%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C)
    - [2.1 http](#21-http)
      - [401,403](#401403)
      - [keep-alive](#keep-alive)
      - [HTTPS 加密算法的原理，如何防止劫持（根证书）](#https-%E5%8A%A0%E5%AF%86%E7%AE%97%E6%B3%95%E7%9A%84%E5%8E%9F%E7%90%86%E5%A6%82%E4%BD%95%E9%98%B2%E6%AD%A2%E5%8A%AB%E6%8C%81%E6%A0%B9%E8%AF%81%E4%B9%A6)
      - [如何在 HTTP 上实现安全传输 [参考](https://leetcode-cn.com/circle/discuss/Yjitxs/)](#%E5%A6%82%E4%BD%95%E5%9C%A8-http-%E4%B8%8A%E5%AE%9E%E7%8E%B0%E5%AE%89%E5%85%A8%E4%BC%A0%E8%BE%93-%E5%8F%82%E8%80%83httpsleetcode-cncomcirclediscussyjitxs)
      - [能不能一次连接多次请求，不等后端返回](#%E8%83%BD%E4%B8%8D%E8%83%BD%E4%B8%80%E6%AC%A1%E8%BF%9E%E6%8E%A5%E5%A4%9A%E6%AC%A1%E8%AF%B7%E6%B1%82%E4%B8%8D%E7%AD%89%E5%90%8E%E7%AB%AF%E8%BF%94%E5%9B%9E)
    - [网络不可达如何排查，例如我当前打不开qq.com](#%E7%BD%91%E7%BB%9C%E4%B8%8D%E5%8F%AF%E8%BE%BE%E5%A6%82%E4%BD%95%E6%8E%92%E6%9F%A5%E4%BE%8B%E5%A6%82%E6%88%91%E5%BD%93%E5%89%8D%E6%89%93%E4%B8%8D%E5%BC%80qqcom)
    - [2.2 tcp&udp](#22-tcpudp)
      - [TCP 和 UDP 的区别，为什么头部长度不一样](#tcp-%E5%92%8C-udp-%E7%9A%84%E5%8C%BA%E5%88%AB%E4%B8%BA%E4%BB%80%E4%B9%88%E5%A4%B4%E9%83%A8%E9%95%BF%E5%BA%A6%E4%B8%8D%E4%B8%80%E6%A0%B7)
      - [tcp三次握手四次挥手 可靠性如何保证](#tcp%E4%B8%89%E6%AC%A1%E6%8F%A1%E6%89%8B%E5%9B%9B%E6%AC%A1%E6%8C%A5%E6%89%8B-%E5%8F%AF%E9%9D%A0%E6%80%A7%E5%A6%82%E4%BD%95%E4%BF%9D%E8%AF%81)
      - [tcp四次挥手](#tcp%E5%9B%9B%E6%AC%A1%E6%8C%A5%E6%89%8B)
      - [udp优点，适用场景](#udp%E4%BC%98%E7%82%B9%E9%80%82%E7%94%A8%E5%9C%BA%E6%99%AF)
      - [time_wait状态、作用](#time_wait%E7%8A%B6%E6%80%81%E4%BD%9C%E7%94%A8)
  - [3. 操作系统](#3-%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F)
    - [页式和段式的区别，优缺点，应用场景](#%E9%A1%B5%E5%BC%8F%E5%92%8C%E6%AE%B5%E5%BC%8F%E7%9A%84%E5%8C%BA%E5%88%AB%E4%BC%98%E7%BC%BA%E7%82%B9%E5%BA%94%E7%94%A8%E5%9C%BA%E6%99%AF)
    - [孤儿进程，僵尸进程](#%E5%AD%A4%E5%84%BF%E8%BF%9B%E7%A8%8B%E5%83%B5%E5%B0%B8%E8%BF%9B%E7%A8%8B)
  - [4. 其他](#4-%E5%85%B6%E4%BB%96)
    - [异或性质的理论证明（交换律，结合律等）](#%E5%BC%82%E6%88%96%E6%80%A7%E8%B4%A8%E7%9A%84%E7%90%86%E8%AE%BA%E8%AF%81%E6%98%8E%E4%BA%A4%E6%8D%A2%E5%BE%8B%E7%BB%93%E5%90%88%E5%BE%8B%E7%AD%89)
    - [死锁条件，如何避免](#%E6%AD%BB%E9%94%81%E6%9D%A1%E4%BB%B6%E5%A6%82%E4%BD%95%E9%81%BF%E5%85%8D)
- [二、语言](#%E4%BA%8C%E8%AF%AD%E8%A8%80)
  - [1. golang](#1-golang)
    - [数组和切片的区别](#%E6%95%B0%E7%BB%84%E5%92%8C%E5%88%87%E7%89%87%E7%9A%84%E5%8C%BA%E5%88%AB)
    - [协程同步的方式](#%E5%8D%8F%E7%A8%8B%E5%90%8C%E6%AD%A5%E7%9A%84%E6%96%B9%E5%BC%8F)
    - [waitgroup和context区别](#waitgroup%E5%92%8Ccontext%E5%8C%BA%E5%88%AB)
    - [如何处理异常](#%E5%A6%82%E4%BD%95%E5%A4%84%E7%90%86%E5%BC%82%E5%B8%B8)
    - [defer](#defer)
    - [通用的http请求日志打印如何封装](#%E9%80%9A%E7%94%A8%E7%9A%84http%E8%AF%B7%E6%B1%82%E6%97%A5%E5%BF%97%E6%89%93%E5%8D%B0%E5%A6%82%E4%BD%95%E5%B0%81%E8%A3%85)
    - [go的调度](#go%E7%9A%84%E8%B0%83%E5%BA%A6)
    - [go struct能不能比较？](#go-struct%E8%83%BD%E4%B8%8D%E8%83%BD%E6%AF%94%E8%BE%83)
    - [select可以用于什么？](#select%E5%8F%AF%E4%BB%A5%E7%94%A8%E4%BA%8E%E4%BB%80%E4%B9%88)
    - [context包的用途？](#context%E5%8C%85%E7%9A%84%E7%94%A8%E9%80%94)
    - [client如何实现长连接？](#client%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0%E9%95%BF%E8%BF%9E%E6%8E%A5)
    - [主协程如何等其余协程完再操作](#%E4%B8%BB%E5%8D%8F%E7%A8%8B%E5%A6%82%E4%BD%95%E7%AD%89%E5%85%B6%E4%BD%99%E5%8D%8F%E7%A8%8B%E5%AE%8C%E5%86%8D%E6%93%8D%E4%BD%9C)
    - [slice，len，cap，共享，扩容](#slicelencap%E5%85%B1%E4%BA%AB%E6%89%A9%E5%AE%B9)
    - [map如何顺序读取？](#map%E5%A6%82%E4%BD%95%E9%A1%BA%E5%BA%8F%E8%AF%BB%E5%8F%96)
    - [实现set](#%E5%AE%9E%E7%8E%B0set)
    - [实现消息队列（多生产者，多消费者）](#%E5%AE%9E%E7%8E%B0%E6%B6%88%E6%81%AF%E9%98%9F%E5%88%97%E5%A4%9A%E7%94%9F%E4%BA%A7%E8%80%85%E5%A4%9A%E6%B6%88%E8%B4%B9%E8%80%85)
    - [大文件排序](#%E5%A4%A7%E6%96%87%E4%BB%B6%E6%8E%92%E5%BA%8F)
    - [channel底层实现](#channel%E5%BA%95%E5%B1%82%E5%AE%9E%E7%8E%B0)
    - [当go服务部署到线上了，发现有内存泄露，该怎么处理](#%E5%BD%93go%E6%9C%8D%E5%8A%A1%E9%83%A8%E7%BD%B2%E5%88%B0%E7%BA%BF%E4%B8%8A%E4%BA%86%E5%8F%91%E7%8E%B0%E6%9C%89%E5%86%85%E5%AD%98%E6%B3%84%E9%9C%B2%E8%AF%A5%E6%80%8E%E4%B9%88%E5%A4%84%E7%90%86)
- [三、提升](#%E4%B8%89%E6%8F%90%E5%8D%87)
  - [1. k8s](#1-k8s)
    - [k8s哪些常用组件](#k8s%E5%93%AA%E4%BA%9B%E5%B8%B8%E7%94%A8%E7%BB%84%E4%BB%B6)
    - [pod的创建整个通路](#pod%E7%9A%84%E5%88%9B%E5%BB%BA%E6%95%B4%E4%B8%AA%E9%80%9A%E8%B7%AF)
    - [service有哪些](#service%E6%9C%89%E5%93%AA%E4%BA%9B)
    - [一个请求到达pod的过程](#%E4%B8%80%E4%B8%AA%E8%AF%B7%E6%B1%82%E5%88%B0%E8%BE%BEpod%E7%9A%84%E8%BF%87%E7%A8%8B)
    - [k8s内部请求到达外部服务的过程](#k8s%E5%86%85%E9%83%A8%E8%AF%B7%E6%B1%82%E5%88%B0%E8%BE%BE%E5%A4%96%E9%83%A8%E6%9C%8D%E5%8A%A1%E7%9A%84%E8%BF%87%E7%A8%8B)
    - [configmap](#configmap)
    - [dockerfile](#dockerfile)
  - [2. redis](#2-redis)
    - [哪些数据类型](#%E5%93%AA%E4%BA%9B%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
  - [3. linux](#3-linux)
    - [查看端口占用命令](#%E6%9F%A5%E7%9C%8B%E7%AB%AF%E5%8F%A3%E5%8D%A0%E7%94%A8%E5%91%BD%E4%BB%A4)
    - [使用shell拆分一个ip地址](#%E4%BD%BF%E7%94%A8shell%E6%8B%86%E5%88%86%E4%B8%80%E4%B8%AAip%E5%9C%B0%E5%9D%80)
    - [如何排查网络问题、命令](#%E5%A6%82%E4%BD%95%E6%8E%92%E6%9F%A5%E7%BD%91%E7%BB%9C%E9%97%AE%E9%A2%98%E5%91%BD%E4%BB%A4)
    - [命令cpu负载、内存占用](#%E5%91%BD%E4%BB%A4cpu%E8%B4%9F%E8%BD%BD%E5%86%85%E5%AD%98%E5%8D%A0%E7%94%A8)
    - [如何发送信号给一个进程](#%E5%A6%82%E4%BD%95%E5%8F%91%E9%80%81%E4%BF%A1%E5%8F%B7%E7%BB%99%E4%B8%80%E4%B8%AA%E8%BF%9B%E7%A8%8B)
  - [4. mysql](#4-mysql)
    - [存储引擎区别](#%E5%AD%98%E5%82%A8%E5%BC%95%E6%93%8E%E5%8C%BA%E5%88%AB)
    - [索引的种类](#%E7%B4%A2%E5%BC%95%E7%9A%84%E7%A7%8D%E7%B1%BB)
    - [查询较慢的时候如何分析](#%E6%9F%A5%E8%AF%A2%E8%BE%83%E6%85%A2%E7%9A%84%E6%97%B6%E5%80%99%E5%A6%82%E4%BD%95%E5%88%86%E6%9E%90)
    - [mysql底层有哪几种实现方式](#mysql%E5%BA%95%E5%B1%82%E6%9C%89%E5%93%AA%E5%87%A0%E7%A7%8D%E5%AE%9E%E7%8E%B0%E6%96%B9%E5%BC%8F)
    - [读写锁底层是怎么实现的](#%E8%AF%BB%E5%86%99%E9%94%81%E5%BA%95%E5%B1%82%E6%98%AF%E6%80%8E%E4%B9%88%E5%AE%9E%E7%8E%B0%E7%9A%84)
  - [5. etcd](#5-etcd)
    - [etcd相关 是什么？](#etcd%E7%9B%B8%E5%85%B3-%E6%98%AF%E4%BB%80%E4%B9%88)
    - [如何保持高可用性](#%E5%A6%82%E4%BD%95%E4%BF%9D%E6%8C%81%E9%AB%98%E5%8F%AF%E7%94%A8%E6%80%A7)
    - [选举机制](#%E9%80%89%E4%B8%BE%E6%9C%BA%E5%88%B6)
    - [脑裂如何解决](#%E8%84%91%E8%A3%82%E5%A6%82%E4%BD%95%E8%A7%A3%E5%86%B3)
  - [6. git](#6-git)
    - [git文件版本，使用顺序，merge跟rebase](#git%E6%96%87%E4%BB%B6%E7%89%88%E6%9C%AC%E4%BD%BF%E7%94%A8%E9%A1%BA%E5%BA%8Fmerge%E8%B7%9Frebase)
  - [7. raft](#7-raft)
    - [raft算法是那种一致性算法](#raft%E7%AE%97%E6%B3%95%E6%98%AF%E9%82%A3%E7%A7%8D%E4%B8%80%E8%87%B4%E6%80%A7%E7%AE%97%E6%B3%95)
    - [raft有什么特点](#raft%E6%9C%89%E4%BB%80%E4%B9%88%E7%89%B9%E7%82%B9)
  - [8. 其他](#8-%E5%85%B6%E4%BB%96)
    - [服务发现有哪些机制](#%E6%9C%8D%E5%8A%A1%E5%8F%91%E7%8E%B0%E6%9C%89%E5%93%AA%E4%BA%9B%E6%9C%BA%E5%88%B6)
    - [电商系统图片多会造成带宽过高，如何解决？](#%E7%94%B5%E5%95%86%E7%B3%BB%E7%BB%9F%E5%9B%BE%E7%89%87%E5%A4%9A%E4%BC%9A%E9%80%A0%E6%88%90%E5%B8%A6%E5%AE%BD%E8%BF%87%E9%AB%98%E5%A6%82%E4%BD%95%E8%A7%A3%E5%86%B3)

<!-- tocstop -->

# 一、基础

## 1. 数据结构&算法

### 两堆大数，100亿个数和10亿个数，找交集

100亿为A堆 10亿为B堆

1. 对A堆每个数hash%1000，根据余数保存在文件An中，共保存1000个文件，B堆进行相同的处理
2. 取出A1和B1文件，比较其中的交集；求出A2和B2的交集；以此类推，直至求出所有对应文件的交集
3. 将步骤2求出的所有交集合并，即为最终A堆和B堆的交集

### 红黑树

### 寻找两个正序数组的中位数

### 插入排序的时间复杂度，快排呢？

### 反转单向链表

### 二叉树的最近公共祖先

### 非递归实现后序遍历

### 两个栈实现一个队列

### 基本排序，哪些是稳定的

### 二叉树应用

### 哈希表怎么解决冲突

## 2. 计算机网络

### 2.1 http

#### 401,403的区别

| |名称|描述|原因|
|---|---|---|---|
|401|unauthorized| 该http状态码表示认证错误，它是为了认证设计的，而不是为了授权设计的。收到401响应，表示请求没有被认证|1.最常见的问题就是用户没有登录或者密码错误<br>2.客户端未提供身份凭证的情况下请求受限资源，服务端返回带有WWW-Authenticate响应头部的401 Unauthorized响应
|403|Forbidden|该http状态码是关于授权方面的。从性质上来说是永久的东西，和应用的业务逻辑相关联。它比401更具体，更实际。收到403相应表示服务器完成认证过程，但是客户端请求没有权限去访问要求的资源|1.用户登录了但是没有足够权限访问所请求的资源，例如普通用户去请求加载管理员路由<br>2.服务器限制特定资源仅允许特定IP或者地理封锁

#### keep-alive

##### tcp keepalive

1. 如果在一段时间内（tcp_keepalive_time）此连接都不活跃，开启保活功能的一端会向对端发送一个保活探测报文
2. keepalive 默认是不开启的，开启需要设置SO_KEEPALIVE
3. tcp_keepalive_time 默认7200s 空闲2小时之后开始发送探测报文
4. tcp_keepalive_intvl 默认75s 空闲之后 每隔75秒就发送一次探测报文
5. tcp_keepalive_probes 默认9次 在空闲之后，发送探测报文没有收到对方的确认，则继续发送探测报文9次

##### http keep-alive

1. http 1.0版本 默认此功能是关闭的，如果客户端支持keep-alive，那么就在消息头设置Connection: Keep-Alive,当服务器收到之后，同样会在回复消息中设置该字段，
2. http 1.1版本 默认此功能开启，如果想要关闭keep-alive，则需要再请求头中指定Connection: Close。最终是否能成功保持连接还是却决于服务器的设置。
3. keep-alive优点，有效减少连接数，避免网络拥塞，减少了建立和销毁连接消耗的性能
4. 非持续连接客户端可以通过连接的建立和断开，来判断消息的开始传递和消息结束。但是开启keep-alive的持续连接，需要消息头中的字段Content-Length字段来判断消息是否发送完毕。对于消息过大，服务器无法及时计算出消息长度的，则使用Transfer-Encoding: chunked的方式传递

#### http 分块编码 Transfer-Encoding: chunked

1. 分块编码是http1.1才有的消息编码格式，用于发送那些在发送之前不知道具体有多大的消息，它允许将消息分为多个部分
2. 消息组成每块消息都由消息长度和消息体组成，消息长度放在单独的一行；长度不包含结尾的\r\n；最后一个消息块的长度必须为0，用来表示消息传输结束

```http
HTTP/1.1 200 OK
Content-Type: text/plain
Transfer-Encoding: chunked

25\r\n
This is the data in the first chunk\r\n

1C\r\n
and this is the second one\r\n
```

#### HTTPS 加密算法的原理，如何防止劫持（根证书）

#### 如何在 HTTP 上实现安全传输 [参考](https://leetcode-cn.com/circle/discuss/Yjitxs/)

#### 能不能一次连接多次请求，不等后端返回

### 网络不可达如何排查，例如我当前打不开qq.com

### 2.2 tcp&udp

#### TCP 和 UDP 的区别，为什么头部长度不一样

#### tcp三次握手四次挥手 可靠性如何保证

#### tcp四次挥手

#### udp优点，适用场景

#### time_wait状态、作用

## 3. 操作系统

### 页式和段式的区别，优缺点，应用场景

### 孤儿进程，僵尸进程

### select、epoll

### 进程、线程和协程间的概念和区别

### IO 密集型和 CPU 密集型如何分配线程优先级

## 4. 其他

### 异或性质的理论证明（交换律，结合律等）

### 死锁条件，如何避免

# 二、语言

## 1. golang

### gpm模型工作机制以及流程

[[典藏版] Golang调度器GPM原理与调度全分析](https://zhuanlan.zhihu.com/p/323271088)

### 数组和切片的区别

1. 数组是定长的，从数组的创建开始，长度就是固定的，之后都不可变；切片的长度不是固定的，后续可以更改扩容
2. 切片其实是对数组的引用, 切片的底层就是数组，切片是相对于数组的一个窗口
3. 当切片新插入元素

- 如果此时长度<底层数组长度 切片窗口长度+1
- 切片长度 > 底层数组长度 新建数组容量是原来的两倍，替换原数组，此时切片底层数组的指针改变成新数组
- 当原数组的长度 >= 1024 时，新数组的长度会以原数组长度*1.25 作为新数组的长度

```golang
 // slice 底层的数据结构
 type slice struct {
  array unsafe.Pointer
  len   int // 切片的长度
  cap   int // 底层数组的容量
 }
```

```golang
// 切片的使用示例及几种需要注意的情况
func main(){
 arr1 := [5]int{0, 1, 2, 3, 4}
 arr2 := arr1[0:5]
 arr3 := append(arr2, 1) // 超出原数组容量，新建一个数组，容量是原数组两倍
 arr4 := arr3[0:3]       // 切片引用的是新数组
 fmt.Println(arr1)       // [0 1 2 3 4]
 fmt.Println(arr2)       // [0 1 2 3 4]
 fmt.Println(arr3)       // [0 1 2 3 4 1]
 fmt.Println(arr4)       // [0 1 2]
 arr1[2] = 10

 fmt.Println(arr1) // [0 1 10 3 4]
 fmt.Println(arr2) // [0 1 10 3 4] // 原数组修改元素，切片跟着改变
 fmt.Println(arr3) // [0 1 2 3 4 1] // 因为切片原数组容量不足，新建数组，改变原数组元素，新的切片数组不跟着改变
 fmt.Println(arr4) // [0 1 2]

 arr6 := make([]int, 0, 1)
 arr6 = append(arr6, 0)
 fmt.Println(cap(arr6), arr6) // 1 [0]
 arr6 = append(arr6, 1)
 fmt.Println(cap(arr6), arr6) // 2 [0 1]
 arr6 = append(arr6, 2)
 fmt.Println(cap(arr6), arr6) // 4 [0 1 2]
}
```

### 协程、同步的方式、怎么切换(2)

### 内存分配

### waitgroup和context区别

### 如何处理异常

### defer

### 通用的http请求日志打印如何封装

### go的调度

### go struct能不能比较？

### select可以用于什么？

### context包的用途？

### client如何实现长连接？

### 主协程如何等其余协程完再操作

### slice，len，cap共享，扩容

### hashmap 扩容、冲突解决（2）

### map如何顺序读取？（2）

### sync.map的源码

### 实现set

### 实现消息队列（多生产者，多消费者）

### 大文件排序

### channel底层实现

### 当go服务部署到线上了，发现有内存泄露，该怎么处理

### go 语言的 panic 如何恢复

### new 和 make 的区别

# 三、提升

## 1. k8s

### k8s哪些常用组件

### pod的创建整个通路

### service有哪些

### 一个请求到达pod的过程

### k8s内部请求到达外部服务的过程

### configmap

### dockerfile

## 2. redis

### 哪些数据类型

### redis 跳表

## 3. linux

### 查看端口占用命令

### 使用shell拆分一个ip地址

### 如何排查网络问题、命令

### 命令cpu负载、内存占用

### 如何发送信号给一个进程

## 4. mysql

### 存储引擎区别

### 索引的种类

### 查询较慢的时候如何分析

### mysql底层有哪几种实现方式

### 读写锁底层是怎么实现的

### sql 执行慢，是什么原因，怎么解决

### 主从复制以及好处、工作原理和机制

### mysql引擎，索引数据结构，为什么用b+树不用别的

## 5. etcd

### etcd相关 是什么？

### 如何保持高可用性

### 选举机制

### 脑裂如何解决

## 6. git

### git文件版本，使用顺序，merge跟rebase

## 7. raft

### raft算法是哪种一致性算法

### raft有什么特点

## 8. 其他

### 服务发现有哪些机制

### 电商系统图片多会造成带宽过高，如何解决？

### CAS

### 对项目和系统做性能测试

### jwt
