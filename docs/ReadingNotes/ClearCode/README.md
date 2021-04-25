---
title: 《CleanCode》-笔记
date: 2021-1-27
categories:
 - frontEnd
tags:
 - 读书笔记
---

::: tip
经常有人写代码写着写着到后面都自己都不想看自己的代码了，更不要说别人来看了。
:::


# Clean Code
代码整洁之道读书笔记 Robert C.Martin 著，整理了部分原书中的内容，将部分例子以JavaScript翻译出来方便理解记忆

##  最重要的！命名技巧
### 1.1 名副其实的命名
花点时间取一个好名字，能省下来的时间比花掉的多，比如时间字段，应当选择指明了计量对象和计量单位的名称：
```js
var elapsedTimeInDays
var daysSinceCreation
var daysSinceModification
var fileAgeInDays
```
再看如下代码
```js
function getTime() {
  let list1 = []
  for(let i:array in lint1){
    if(i[0] === 4) {
      list1.add(x)
    }
    return list1
  }
} 
```
很难看出来上面代码做了什么事，也没有复杂的表达式，空格和缩进中规中矩，只有两三个变量，没有任何其他多的解释或者方法。

### 1.2 避免误导
**必须避免留下掩藏代码本意的错误线索，应当避免与本意相悖的词**，列如hp、aix、sco都不应该作为变量名，以为是简写其实没什么卵用。  
如不要使用accountList来只称一组账号，除非他真的是List类型，否则就会引起错误的判断，所以用accountGroup或者bunchOfAccounts甚至直接用accounts都会好一些。  
提防使用不同之处较小的名称。  
**以同样的方是拼写出同样的概念才是信息，拼写前后不一致就是误导。**

### 1.3 区分的意义
如同一作用范围内两样不同的东西不能重名，你可能会随手改掉其中一个的名称，有时干脆就以错误的拼写充数，结果可能就会出现更正拼写错误后导致编译器出错的情况。即使能够运行，仅仅是添加数字系列或者是废话是远远不够的，如果名称不同，意思应该也不同才对。例如：
```js
function copyChars(a1,a2) {
  for(let i=0;i<a1.length;i++;) {
    a2[i] = a1[i]
  }
}
```
如果参数名改为source和destination，这样就会好很多。

------
另外废话是另外一种没有意义的区分，假如有一个Product对象，同时还有一个ProductInfo和ProductData对象，虽然名称不同，但是意思却没有多大的差别，就像a,an,the一样是意义混淆不清的废话。
如
```js
getActiveAccount()
getActiveAccounts()
getActiveAccountInfo()
```
这三个函数，如果没有明确的约定就完全不知道调用的时候应该调用哪个。

### 1.4 名称可读
此可读不是计算机windows中的可读，而是真真正正能读出来，作为中国人，大部分的过于专业的单词名词等都没法读出来，因此在命名的时候就应该考虑出来是否可读并且解释，这样的变量、方法也更容易维护，第一眼看上去就能把他默读出来。   
**特别是不要使用一些自造词。**
```js
class DtaRcrd102 {
  var genumdhms
  var modymdhms
  var pszqint = '102'
}
```
和
```js
class Customer {
  let generationTimeStamp
  let modificationTimeStamp
  let recordId = '102'
}
```
下边看起来就容易很多，很直白的理解了时间戳等

### 1.5 名称可搜索
单个字母名称和数值常量有问题的时候，很难在一大片文字中找出来，比如找MAX_CLASS_PER_STUDENT很容易，但是找数字7就很麻烦，特别是一长串常量数字，又被人修改过，找起来就会很难，从而逃过搜索造成错误。   
**取名建议：切以为单字母名称仅用于短方法中的本地变量。名称长短应与其作用域大小相对应。若变量或者常量在代码中多次使用，则应该赋予其便于搜索的名称。**  
```js
for(let j = 0,j<34;j++>) {
  s += (t[j] *4)/5
}
//和
let realDaysPerIdealDay = 4
const WORK_DAYS_PER_WEEK = 5
let sum = 0
for(let j=0;j<NUMBER_OF_TASKS>;j++) {
  let realTaskDays = taskEstimate[j] + realDaysPerIdealDay
  let realTaskWeeks = (realdays / WORK_DAYS_PER_WEEK)
  sum += realTaskWeeks
}
```
### 1.6 成员前缀
应当把类和方法等做的足够小，消除对成员前缀的需求，即**尽量不使用成员前缀**。  

### 1.7 避免思维映射
不应当让阅读代码的人把命名翻译为他们所熟知的名称。

### 1.8 类名
类名和对象应该是**名词或者名词短语**，如Customer,WikiPage,Account,AddressParser,避免使用Manager，Processor,Data或者Info这样的类名。  
！！！**类名不应当是动词**。

### 1.9 方法名
**方法名应当是动词或者动词短语**，如postPayMent,deletePage或者save。属性访问器，修改器和断言等应该根据其值来命名，并依标准加上get，set和is前缀。
```js
var name = employe.getName()
customer.setName("mike")
if(paycheck.isPosted())...
```
重载构造器时，使用描述了参数的静态工厂方法名，例如：
```js
Complex fulcrumPoint = Complex.FromRealNumber(23,0)
//通常好于
Complex fulcrumPoint = new Complex(23,0)
```

### 1.10 每一个概念对应一个词
**给每一个抽象概念选一个词，并且一以贯之。**
例如使用fetch，retrieve和get来给多个类中的同种方法命名，但是怎么记得住哪个类中是哪一个方法呢，这样会浪费大把的时间去浏览各个文件头和前面的代码。  

### 1.11 别用双关语
**避免将同一个单词用作不同的目的。** 同一个术语用于不同的概念，基本就是双关语了。

### 1.12 使用解决方案领域的名称
用小白的话说，就是用易于理解的单词去替换晦涩难懂的专业性词汇，比如那些计算机科学术语，算法名，模式名，数学术语等，依据问题所涉猎的领域来命名会造成不必要的麻烦，取一个技术性的名称是最靠谱的做法。

### 1.13 添加有意义的语境
很少能有名称是能自我说明的，反之，你**需要用有良好命名的类函数或者命名空间来放置名称，给阅读者提供语境。** 给名称添加前缀是最次之的办法。
如下边的代码，函数名仅仅给出了部分语境，算法提供了剩下的部分。整个读完后，才知道number，verb和pluraModifier这三个变量是“测估”信息的一部分，不幸的是这些都得推断出来，第一眼看到这个方法的时候是完全不知道在说什么的
```js
function printGuessStatistics(candidate,count) {
  let number;
  let verb;
  let pluralModifier
  if (count === 0) {
    number = "no"
    verb = 'are'
    pluralModifier = 's'
  } else if (count === 1) {
    number = "1"
    verb = 'is'
    pluralModifier = ''
  } else {
    number = Integer.toString(count)
    verb = 'are'
    pluralModifier = 's'
  }
  console.log(number,verb,pluralModifier)
}
```
上述的函数有点过长，变量的使用贯穿始终，为了干净利落可以这么写：
```js
class GuessStatisticsMessage {
  let number
  let verb
  let pluralModifier

  function make(candidate,count) {
    creatPluralDependentMessageParts(count)
    let message = number + verb + pluralModifier
    return message
  }

  function creatPluralDependentMessageParts(count) {
    if(count === 0) {
      thereAreNoLetters()
    } else if (count === 1) {
      thereIsOneLetter()
    } else {
      thereAreManyLetters(count)
    }
  }

  function thereAreManyLetters () {
    //...
  }
  function thereIsOneLetter () {
    //...
  }
  function thereAreNoLetters () {
    //...
  }
}
```

## 函数的优化
### 2.1 短小
1. 函数的长度
**函数的第一规则是要短小，第二规则是还要更短小** ，函数最合适的行数在5行左右，这样看起来也方便，如果一个函数太长，显示器都塞不下，阅读起来将极其困难。
2. if，else，while等语句，其中的代码块应该只有一行，这行大抵应该是一个函数的调用语句，这样不但能保持函数的短小，而且因为块内调用的函数拥有比较具有说明性的名称，从而增加了文档上的价值，这也意味着函数不应该大到足以容纳嵌套结构，所以函数的缩进层级不应该多于一层或者两层。

### 2.2 只做一件事
**函数应该只做一件事，做好这件事，只做这一件事** 问题在于很难知道那件事该做的事是什么，如果函数只是做了该函数下的同一抽象层上的步骤，则函数还是只做了一件事。编写函数毕竟是为了把大一些的概念拆分为另一个抽象层上的一系列步骤。
还有一个方法就是，**要判断一个函数是否不止做了一件事，就是要看看能否再拆出来一个函数** ，该函数不仅是单纯的重新诠释其实现。

### 2.3 每一个函数一个抽象层级

要确保函数只做一件事情，函数中的语句都要在同一个抽象层上面。
函数中混杂的不同的抽象层级，往往让人迷惑。很可能在阅读的时候无法判断是某个表达式还是基础的概念还是戏界，更加恶劣的是，就像破损的窗户，一旦细节和基础概念混杂，更多的细节就会在函数中纠结起来。  
**自顶向下读代码：向下规则**

------------

:::tip
我们想要代码拥有自顶向下的阅读顺序。要让每一个函数的后面都跟着位于下一抽象层级的函数，这样一来，在查看函数列表的时候，就能循抽象层级向下阅读了，我们把这个叫做**向下规则**。
:::

### 2.4 switch语句

将switch语句埋在抽象工厂的底下，不让任何人看到。。。

### 2.5 使用描述性的名称

函数越短小，功能越集中，越便于取一个好名字，而且长而具有描述性的名称往往比短而令人费解的名称要好。长而具有描述性的名称，要比描述性的长注释要好的多。使用某种命名约定，让函数名称中的多个单词容易阅读，然后是这些单词给函数取一个能说清其功能的名称。
**选择描述性的名称能理清你关于模块的设计思路，并帮助你改进之。追索好的名称，往往导致对代码的改善和重构。**

**命名的方式要保持一致。使用与模块名一脉相承的短语、动词和名词给函数命名。**

例如：
```js
let includeSetupAndTeardownPages
let includeSetupPages
let includeSuiteSetupPage
let includeSetupPage
```
这些名称使用了类似的措辞，依序讲出了一个故事。

### 2.6 函数参数

最理想的函数参数数量是零（零参数函数），其次是一（单参数函数），依次类推，应当避免多参数函数，有足够的特殊的理由才能使用三个以上的参数。

参数带有太多的概念性质，如
```js
includeSetupPage() 要比 includeSetupPageInto(newPage-Content)易于理解的多
```

1. 一元函数的普遍形式，应该注意的是，有一种不那么普遍但仍及其有用的单参数的函数形式，那就是事件，在这种形式中，有输入参数而无输出参数，程序将函数看成是一个事件，
2. **标识参数**， 如果标识参数方法签名将会立刻边的复杂起来。
3. **二元函数**， 有两个参数的函数要比一元函数难懂，例如：writeField(name)比writeField(outputStream,name)好懂。尽管两种情况下的意义都很清楚，但是第一个只要扫一眼就会明白，更好的表达了其意义。第二个得暂停一下才能明白。
4. **三元函数**， 有三个参数的函数要比二元函数难懂的多。排序，琢磨，忽略的问题都会加倍的提现，所以在写三元函数之前一定要想清楚。
5. **参数对象**，***如果函数看来需要两个，三个或者三个以上的参数，就说明其中一些参数应该封装为类了***。从参数创建对象，从而减少参数的数量，看起来就像是在作弊，但实则并非如此。当一组参数被共同的传递，就像上例中的X和Y那样，往往就是该有自己名称的某个概念的一部分。
6. **动词和关键词**，给函数取一个好名字，能较好的解释函数的示意图，以及参数的顺序和示意图，对于一元函数。
   
### 2.7 无副作用
副作用是一种谎言。函数承诺只做一件事，但还是会做其他被藏起来的事。有时，它会对自己类中的变量做出未能预期的改动。有时，它会把变量搞成向函数传递参数或是系统的全局变量。无论哪种情况，都是具有破坏性的，会导致古怪的时序性耦合以及顺序依赖。

### 2.8 分隔指令与询问

函数要么做什么事，要么回答什么事，但二者不可兼得。函数应该修改某个对象的状态，或者是返回该对象的有关信息。两样都经常会导致混乱。
```js
function set(attribute,value) {
  if(set("username","unclebob"))...
}
```
这个函数是再问username属性值是否之前已经设置为unlebob，或者它是在问username属性值是否成功设置为unclebob，从这行调用很难判断其含义，因为set是动词还是形容词并不清楚。
函数的本意，set是一个动词，但是在if语句中的上下文中，感觉它像是一个形容词。该语句读起来像是说“如果username”属性值之前已被设置为uncleob”，而不是“设置username属性值为unclebob，看看是否可行，然后。。。”要解决这个问题，可以将set函数重命名为setAndCheckIfExists,但这对提高if语句的可读性的帮助不太大，真正的解决方案是把指令与询问分割开来，防止混淆的事情发生：
```js
if(attributeExists('username')) {
  setAttribute('username','unclebob')
  ...
}
```


### 2.9 使用异常替代返回错误码
从指令式函数返回错误码轻微违反了指令与询问分割的规则。它鼓励了在if语句判断中把指令当作表达式使用。
```js
if(deletePage(page) === E_OK) 
```
这样不会引起动词/形容词混淆，但却导致更深层次的嵌套结构。当返回错误码的时候，就是在要求调用者立刻处理错误。
```js
try {
  deletePage(page)
  registry.deleteReference(page.name)
  configKeys.deleteKey(page.name.makeKey())
}
catch (Exception e) {
  logger.log(e.getMessage())
}
```
1. **抽离Try/Catch代码块**  
   Try/catch代码丑陋不堪，而且混乱了代码的结构，最好把try和catch块的主题分离开来，另外形成函数。
   ```js
   function delete(Page page) {
     try {
       deletePageAndAllReferences(page)
     }
     catch(Exception e) {
       logError(e)
     }
   }

   function deletePageAndAllReferences() throws Exception {
     deletePage(page)
     registry.deleteReference(page.name)
     configKeys.deleteKey(page.name.makeKey())
   }

   function logError(Exception e) {
     logger.log(e.getMessage())
   }
   ```
   在上例中，delete函数只与错误处理有关。很容易理解然后忽略掉。deletePageAndAllReference函数只与完全删除了一个page有关。错误处理可以忽略掉。有了这样的区隔，代码就更加易于管理和修改了。

2. **错误处理就一件事儿**  
   函数处理一个事务，错误处理应该也是一个事务。因此，处理错误的函数不该做其他的事儿。这意味着，如果关键字try在某个函数中存在，他就是这个函数的第一个单词而且在catch/finally代码块后面也不该有其他的内容。

### 2.10 不要重复

重复会导致问题，因此代码会变得臃肿。并且当算法改变的时候需要改变4处地方，而且也会增加四次放过错误的可能性。

### 2.11 结构化编程

每个函数中的代码都应该有一个入口，和一个出口。遵循这些规则，意味着在每个函数中只该有一个return语句，循环中不能有break和continue语句，而且永远都不能有goto语句。  
结构化变成只是对