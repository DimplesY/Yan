---
title: 本地免费调用腾讯云 DeepSeek 大模型完整指南（2025.2.25前有效）
---

# 前言

官方的 deepseek 到目前为止都不是很稳定，经常出现 "服务器繁忙，请稍后再试。" 的情况。

但是 deepseek-r1 作为一个开源的模型，只要你有足够的算力，就能够自己搭建一个对话平台，无限制使用。

经过我的测试，我使用的是 MacBook Pro M1 max 32G + Ollama 只能够刚刚好跑得动 `deepseek-r1:32b` 的模型。

今天看到腾讯云限时免费调用 deepseek 系列的模型，具体如下：
- DeepSeek-V3 为 671B 参数 MoE 模型 
- DeepSeek-R1 为 671B 模型

![1739012386076-Bx2nfO](https://dimples-yanjie.oss-cn-beijing.aliyuncs.com/blog/2025-02-08/1739012386076-Bx2nfO.jpg)

也就是说在 2025年2月25日23时59分59秒，我们去调用腾讯云为我们提供的 deepseek 模型都免费。

本篇文章的内容大概就是手把手教大家在本地搭建一个客户端，能够使用腾讯云的 deepseek 模型。

# 具体的步骤

## 1. 准备一个腾讯云账号

需要使用腾讯云的服务，当然首先需要一个腾讯云的账号，这一步我们直接去腾讯云官网，然后使用微信扫码登录即可。

腾讯云官网地址：<https://cloud.tencent.com/>

注册之后进入到这个链接：<https://console.cloud.tencent.com/lkeap>

![1739013031965-Mfvm2a](https://dimples-yanjie.oss-cn-beijing.aliyuncs.com/blog/2025-02-08/1739013031965-Mfvm2a.png)

勾选“我已阅读并同意”，然后点击开通大模型知识引擎，中间的教程弹窗界面不用管，开通之后刷新这个界面即可。

## 2. 创建 OpenAI 格式的 key

点击“立即接入”，选择下面的使用 OpenAI SDK 方式介入，点击 “创建API KEY”。

![1739013165924-xLOle1](https://dimples-yanjie.oss-cn-beijing.aliyuncs.com/blog/2025-02-08/1739013165924-xLOle1.png)

具体的操作步骤如下：

![1739013336737-6l3Lby](https://dimples-yanjie.oss-cn-beijing.aliyuncs.com/blog/2025-02-08/1739013336737-6l3Lby.png)

到这里我们已经有了调用腾讯云的 deepseek 模型的资格，如果你会写代码，可以使用代码去调用，下面我介绍使用现成的客户端来调用 deepseek 模型。
## 3.下载本地客户端 (cherry studio)

这里我使用的是 cherry studio 这个本地客户端，官网的地址是这个: <https://cherry-ai.com/>

会自动识别自己电脑能够使用的版本，直接下载即可。

![1739013472631-DerFsj](https://dimples-yanjie.oss-cn-beijing.aliyuncs.com/blog/2025-02-08/1739013472631-DerFsj.png)

## 4. 配置客户端





1. 打开客户端，点击设置，然后点击添加，如下图所示：

![1739013533592-rlNmdV](https://dimples-yanjie.oss-cn-beijing.aliyuncs.com/blog/2025-02-08/1739013533592-rlNmdV.png)

2. 创建一个供应商，名称随便图中我方便区分，把名字叫 `腾讯云deepseek` ，提供商一定要选择 `OpenAI` ， 然后点确定。

![1739013613909-54uB19](https://dimples-yanjie.oss-cn-beijing.aliyuncs.com/blog/2025-02-08/1739013613909-54uB19.png)

1. 最后在设置当中，把刚刚在腾讯云上创建的 API KEY 填到 API 密钥当中，API 地址填 `https://api.lkeap.cloud.tencent.com`，再将 `deepseek-r1` 和 `deepseek-v3` 的模型添加到模型列表当中。

![1739013747697-v2ZiCg](https://dimples-yanjie.oss-cn-beijing.aliyuncs.com/blog/2025-02-08/1739013747697-v2ZiCg.png)

## 测试效果

然后我们回到对话页面，点击上方把模型切换成腾讯云的 deepseek 模型。

![1739014012668-ZZdP22](https://dimples-yanjie.oss-cn-beijing.aliyuncs.com/blog/2025-02-08/1739014012668-ZZdP22.png)

测试一下对话效果。

![1739014081272-nK4Z5J](https://dimples-yanjie.oss-cn-beijing.aliyuncs.com/blog/2025-02-08/1739014081272-nK4Z5J.png)

ok，现在我们就能够愉快的使用 deepseek-r1 了，不需要再因为官方频繁提示 "服务器繁忙，请稍后再试。" 而苦恼。
