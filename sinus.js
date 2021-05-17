//let mic;
let r,g,b;
let x1,x2;
function setup() {
createCanvas(994,1350); // put setup code here
//mic = new p5.AudioIn();
//mic.start();
}

function draw() {
x1=sin(frameCount*0.1)*20;
x2=cos(frameCount*0.1)*20;
r=random(255);
g=random(255);
b=random(255);
background(255);
//let vol = mic.getLevel();    

//let h = map(vol, 0, 1,0, 200);
fill("#b1bdb6");// head picture 1
 beginShape();
 vertex(316,409+x1);
 vertex(299,456+x1);
 vertex(302,485+x1);
 vertex(308,471+x1);
 vertex(314,473+x1);
 vertex(320,478+x1);
 vertex(318,488+x1);
 vertex(312,492+x1);
 vertex(320,496+x1);
 vertex(340,493+x1);
 vertex(351,484+x1);
 vertex(361,474+x1);
 vertex(361,457+x1);
 vertex(361,442+x1);
 vertex(361,432+x1);
 vertex(357,422+x1);
 vertex(355,406+x1);
 vertex(346,425+x1);
 vertex(338,441+x1);
 vertex(333,448+x1);
 vertex(329,451+x1);
 vertex(325,438+x1);
 vertex(321,420+x1);
 vertex(317,411+x1);
 vertex(316,411+x1);
 endShape(CLOSE);

 //let j = map(vol, 0, 1,0, 200);
fill("#c6c8bb");// eye picture 1
 beginShape();
 vertex(310,471+x2);
 vertex(305,475+x2);
 vertex(309,483+x2);
 vertex(315,481+x2);
 vertex(316,476+x2);
 vertex(312,471+x2);
 vertex(311,471+x2);
 endShape(CLOSE);

fill("#3a3532");// tongue picture 1
 beginShape();
vertex(330,441+x2);
vertex(329,406+x2);
vertex(324,369+x2);
vertex(328,329+x2);
vertex(334,326+x2);
vertex(343,332+x2);
vertex(345,381+x2);
vertex(335,406+x2);
vertex(330,444+x2);
endShape(CLOSE);

fill("#312b2b");// hair picture 1 top left
 beginShape();
vertex(300,489+x2);
vertex(302,502+x2);
vertex(287,500+x2);
vertex(293,503+x2);
vertex(305,519+x2);
vertex(307,501+x2);
vertex(305,501+x2);
vertex(304,491+x2);
endShape(CLOSE);

fill("#312b2b");// hair picture 1 top right
 beginShape();
vertex(318,496+x2);
vertex(315,503+x2);
vertex(323,499+x2);
vertex(312,506+x2);
vertex(310,514+x2);
vertex(317,507+x2);
vertex(314,513+x2);
vertex(323,504+x2);
endShape(CLOSE);

fill("#312b2");// hair picture 1 down left
 beginShape();
vertex(306,522+x2);
vertex(300,527+x2);
vertex(290,536+x2);
vertex(274,566+x2);
vertex(288,542+x2);
vertex(276,576+x2);
vertex(292,541+x2);
vertex(304,526+x2);
vertex(278,579+x2);
vertex(304,526+x2);
vertex(297,557+x2);
vertex(295,572+x2);
vertex(291,573+x2);
vertex(283,611+x2);
vertex(285,614+x2);
vertex(282,625+x2);
vertex(289,612+x2);
vertex(286,608+x2);
vertex(303,532+x2);
vertex(295,583+x2);
vertex(299,580+x2);
vertex(294,617+x2);
vertex(303,548+x2);
vertex(307,543+x2);
vertex(307,523+x2);
endShape(CLOSE);

fill("#312b2");// hair picture 1 down right
 beginShape();
vertex(311,521+x2);
vertex(326,553+x2);
vertex(338,606+x2);
vertex(312,524+x2);
vertex(331,609+x2);
vertex(312,528+x2);
vertex(324,589+x2);
vertex(312,532+x2);
vertex(317,578+x2);
vertex(310,521+x2);
vertex(314,574+x2);
vertex(311,523+x2);
vertex(311,524+x2);
endShape(CLOSE);

fill("#494343");// body picture 1
 beginShape();
vertex(310,493+x2);
vertex(311,540+x2);
vertex(315,607+x2);
endShape(CLOSE);

fill("#524d49");// leg picture 1 left
 beginShape();
vertex(315,609+x2);
vertex(315,628+x2);
vertex(317,628+x2);
vertex(324,708+x2);
vertex(330,757+x2);
vertex(329,850+x2);
endShape(CLOSE);

fill("#524d49");// leg picture 1 right
 beginShape();
vertex(316,612+x2);
vertex(325,626+x2);
vertex(319,626+x2);
vertex(317,615+x2);
vertex(340,672+x2); 
vertex(363,750+x2);
vertex(370,793+x2);
vertex(379,847+x2);
endShape(CLOSE);

fill("#23241e");// foot picture 1 left
 beginShape();
vertex(329,857+x2);
vertex(317,871+x2);
vertex(329,857+x2);
vertex(327,873+x2);
vertex(328,860+x2);
vertex(341,872+x2);
vertex(331,858+x2);
endShape(CLOSE);

fill("#23241e");// foot picture 1 right
 beginShape();
vertex(380,851+x2);
vertex(370,869+x2);
vertex(380,852+x2);
vertex(384,873+x2);
vertex(381,853+x2);
vertex(393,862+x2);
vertex(380,852+x2);
endShape(CLOSE);

fill("#343434");// tail picture 1
 beginShape();
vertex(327,634+x2);
vertex(273,697+x2);
vertex(238,754+x2);
vertex(226,763+x2);
vertex(213,768+x2);
vertex(201,766+x2);
vertex(183,758+x2);
vertex(175,747+x2);
vertex(170,736+x2);
vertex(172,729+x2);
vertex(170,744+x2);
vertex(194,766+x2);
vertex(218,770+x2);
vertex(241,751+x2);
vertex(262,715+x2);
vertex(284,683+x2);
vertex(329,632+x2);
vertex(292,693+x2);
vertex(275,717+x2);
vertex(254,732+x2);
vertex(237,737+x2);
vertex(202,729+x2);
vertex(190,718+x2);
vertex(183,702+x2);
vertex(184,688+x2);
vertex(182,707+x2);
vertex(205,732+x2);
vertex(251,736+x2);
vertex(279,714+x2);
vertex(328,634+x2);
vertex(257,728+x2);
vertex(246,741+x2);
vertex(214,751+x2);
vertex(193,745+x2);
vertex(192,730+x2);
vertex(198,722+x2);
vertex(210,717+x2);
vertex(214,724+x2);
endShape(CLOSE);

fill("#cbcdc8");// head picture 2
 beginShape();
vertex(434,645+x2);
vertex(435,636+x2);
vertex(433,630+x2);
vertex(431,626+x2);
vertex(432,614+x2);
vertex(441,594+x2);
vertex(451,587+x2);
vertex(470,583+x2);
vertex(487,585+x2);
vertex(500,599+x2);
vertex(500,612+x2);
vertex(492,622+x2);
vertex(468,645+x2);
endShape(CLOSE);

fill("#afafa5");// eye picture 2
 beginShape();
vertex(458,588+x2);
vertex(453,589+x2);
vertex(453,592+x2);
vertex(455,595+x2);
vertex(461,596+x2);
vertex(462,593+x2);
vertex(462,591+x2);
vertex(459,589+x2);
endShape(CLOSE);

fill("#352b29");// mouth picture 2
 beginShape();
vertex(435,642+x2);
vertex(439,631+x2);
vertex(445,624+x2);
vertex(460,624+x2);
vertex(468,629+x2);
vertex(471,639+x2);
vertex(468,649+x2);
vertex(464,640+x2);
vertex(460,634+x2);
vertex(452,632+x2);
vertex(444,635+x2);
vertex(436,643+x2);
endShape(CLOSE);

fill("#363636");// tongue picture 2
 beginShape();
vertex(459,636+x2);
vertex(460,645+x2);
vertex(450,662+x2);
vertex(456,671+x2);
vertex(463,671+x2);
vertex(464,666+x2);
vertex(461,662+x2);
vertex(456,662+x2);
vertex(454,660+x2);
vertex(462,648+x2);
vertex(462,646+x2);
vertex(458,635+x2);
endShape(CLOSE);

fill("#3a3b40");// hair picture 2
 beginShape();
vertex(432,637+x2);
vertex(410,699+x2);
vertex(434,636+x2);
vertex(415,701+x2);
vertex(434,647+x2);
vertex(420,706+x2);
vertex(439,644+x2);
vertex(426,703+x2);
vertex(442,641+x2);
vertex(433,697+x2);
vertex(444,640+x2);
endShape(CLOSE);

fill("#393836");// body picture 2 
 beginShape();
vertex(448,595+x2);
vertex(448,657+x2);
vertex(446,684+x2);
vertex(444,711+x2);
endShape(CLOSE);

fill("#282629");// leg picture 2 left
 beginShape();
vertex(444,709+x2);
vertex(297,858+x2);
vertex(283,861+x2);
vertex(296,858+x2);
vertex(287,866+x2);
vertex(296,858+x2);
vertex(298,869+x2);
vertex(296,858+x2);
endShape(CLOSE);

fill("#282629");// leg picture 2 middle
 beginShape();
vertex(443,711+x2);
vertex(434,842+x2);
vertex(423,856+x2);
vertex(432,843+x2);
vertex(424,861+x2);
vertex(430,846+x2);
vertex(427,859+x2);
vertex(432,845+x2);
vertex(432,859+x2);
vertex(433,845+x2);
endShape(CLOSE);

fill("#282629");// leg picture 2 right
 beginShape();
vertex(445,710+x2);
vertex(510,813+x2);
vertex(507,826+x2);
vertex(509,814+x2);
vertex(515,825+x2);
vertex(509,813+x2);
vertex(519,817+x2);
vertex(509,814+x2);
endShape(CLOSE);

fill("#cdd3c5");// head picture 3
 beginShape();
vertex(554,469+x2);
vertex(540,467+x2);
vertex(523,478+x2);
vertex(519,485+x2);
vertex(519,490+x2);
vertex(522,495+x2);
vertex(527,500+x2);
vertex(535,504+x2);
vertex(547,500+x2);
vertex(553,496+x2);
vertex(555,491+x2);
vertex(545,486+x2);
vertex(542,482+x2);
vertex(541,479+x2);
vertex(541,476+x2);
vertex(542,475+x2);
vertex(544,471+x2);
vertex(552,469+x2);
vertex(553,470+x2);
endShape(CLOSE);

fill("#cdd3c5");// mouth picture 3 
 beginShape();
vertex(532,469+x2);
vertex(519,467+x2);
vertex(505,476+x2);
vertex(486,500+x2);
vertex(500,494+x2);
vertex(506,491+x2);
vertex(519,490+x2);
vertex(507,502+x2);
vertex(496,515+x2);
vertex(519,511+x2);
vertex(538,508+x2);
vertex(540,506+x2);
vertex(526,501+x2);
vertex(519,491+x2);
vertex(517,488+x2);
vertex(518,482+x2);
vertex(524,475+x2);
endShape(CLOSE);

fill("#cdd3c5");// tongue picture 3
 beginShape();
vertex(516,490+x2);
vertex(503,500+x2);
vertex(494,507+x2);
vertex(482,509+x2);
vertex(475,507+x2);
vertex(472,503+x2);
vertex(470,497+x2);
vertex(470,484+x2);
vertex(476,468+x2);
endShape(CLOSE);

fill("#cdd3c5");// eye picture 3
 beginShape();
vertex(557,470+x2);
vertex(551,470+x2);
vertex(547,473+x2);
vertex(545,477+x2);
vertex(545,482+x2);
vertex(547,485+x2);
vertex(555,488+x2);
vertex(560,487+x2);
vertex(562,480+x2);
vertex(562,476+x2);
vertex(560,471+x2);
vertex(557,469+x2);
endShape(CLOSE);

fill("#cdd3c5");// hair picture 3
 beginShape();
vertex(563,473+x2);
vertex(579,488+x2);
vertex(579,508+x2);
vertex(571,520+x2);
vertex(559,531+x2);
vertex(545,533+x2);
vertex(539,522+x2);
vertex(550,510+x2);
vertex(562,510+x2);
vertex(579,518+x2);
vertex(582,529+x2);
vertex(579,544+x2);
vertex(566,561+x2);
vertex(553,569+x2);
vertex(543,571+x2);
vertex(534,568+x2);
vertex(556,570+x2);
vertex(566,560+x2);
vertex(574,547+x2);
vertex(582,537+x2);
vertex(570,562+x2);
vertex(558,581+x2);
vertex(566,568+x2);
vertex(571,557+x2);
vertex(581,536+x2);
vertex(580,553+x2);
vertex(573,564+x2);
vertex(564,570+x2);
vertex(549,577+x2);
vertex(533,579+x2);
vertex(531,568+x2);
vertex(536,562+x2);
vertex(546,554+x2);
vertex(556,551+x2);
vertex(567,553+x2);
vertex(576,559+x2);
vertex(575,587+x2);
vertex(564,597+x2);
vertex(552,607+x2);
vertex(541,607+x2);
vertex(530,603+x2);
vertex(525,602+x2);
vertex(553,607+x2);
vertex(530,607+x2);
vertex(523,597+x2);
vertex(523,593+x2);
endShape(CLOSE);

fill("#3b3632");// body picture 3
 beginShape();
vertex(549,613+x2);
vertex(551,512+x2);
vertex(551,487+x2);
endShape(CLOSE);

fill("#3b3632");// leg picture 3 left
 beginShape();
vertex(548,616+x2);
vertex(488,811+x2);
vertex(473,832+x2);
vertex(490,807+x2);
vertex(486,830+x2);
vertex(487,811+x2);
vertex(497,826+x2);
vertex(489,808+x2);
endShape(CLOSE);

fill("#3b3632");// leg picture 3 middle 
 beginShape();
vertex(548,618+x2);
vertex(531,790+x2);
vertex(516,804+x2);
vertex(532,788+x2);
vertex(541,796+x2);
vertex(533,787+x2);
vertex(526,803+x2);
vertex(532,789+x2);
vertex(540,802+x2);
vertex(533,791+x2);
vertex(529,807+x2);
vertex(531,792+x2);
vertex(537,806+x2);
vertex(532,792+x2);
endShape(CLOSE);

fill("#3b3632");// leg picture 3 right
 beginShape();
vertex(549,615+x2);
vertex(609,824+x2);
vertex(616,839+x2);
vertex(610,825+x2);
vertex(624,832+x2);
vertex(609,824+x2);
endShape(CLOSE);

fill("#3e3f3a");// head picture 4
 beginShape();
vertex(640,612+x2);
vertex(640,612+x2);
vertex(622,616+x2);
vertex(587,622+x2);
vertex(576,629+x2);
vertex(572,642+x2);
vertex(575,651+x2);
vertex(583,656+x2);
vertex(598,661+x2);
vertex(616,658+x2);
vertex(653,639+x2);
vertex(639,640+x2);
vertex(625,637+x2);
vertex(616,631+x2);
vertex(616,625+x2);
vertex(638,614+x2);
endShape(CLOSE);

fill("#11191c");// tongue picture 4
 beginShape();
vertex(621,630+x2);
vertex(630,626+x2);
vertex(627,619+x2);
vertex(650,624+x2);
vertex(650,613+x2);
vertex(654,615+x2);
vertex(671,616+x2);
vertex(706,609+x2);
vertex(626,635+x2);
vertex(622,631+x2);
endShape(CLOSE);

fill("#4d4a43");// eye picture 4
 beginShape();
vertex(598,622+x2);
vertex(592,623+x2);
vertex(591,627+x2);
vertex(594,631+x2);
vertex(601,632+x2);
vertex(603,627+x2);
vertex(601,624+x2);
vertex(599,622+x2);
endShape(CLOSE);

fill("#2e2423");// hair picture 4
 beginShape();
vertex(575,632+x2);
vertex(547,655+x2);
vertex(573,637+x2);
vertex(546,660+x2);
vertex(576,642+x2);
vertex(545,665+x2);
vertex(573,650+x2);
vertex(579,634+x2);
endShape(CLOSE);

fill("#31302e");// body picture 4
 beginShape();
vertex(573,651+x2);
vertex(570,681+x2);
vertex(564,720+x2);
endShape(CLOSE);

fill("#31302e");// leg picture 4 left
 beginShape();
vertex(564,720+x2);
vertex(471,797+x2);
vertex(402,859+x2);
endShape(CLOSE);

fill("#31302e");// leg picture 4 middle
beginShape();
vertex(564,722+x2);
vertex(549,818+x2);
vertex(542,822+x2);
vertex(551,819+x2);
vertex(555,828+x2);
vertex(551,819+x2);
vertex(537,835+x2);
vertex(551,819+x2);
vertex(552,833+x2);
vertex(552,820+x2);
vertex(539,842+x2);
vertex(551,820+x2);
vertex(548,842+x2);
vertex(550,822+x2);
vertex(536,857+x2);
vertex(547,824+x2);
vertex(548,843+x2);
vertex(548,828+x2);
vertex(546,852+x2);
vertex(548,830+x2);
vertex(540,880+x2);
endShape(CLOSE);

fill("#31302e");// leg picture 4 right 
 beginShape();
vertex(563,726+x2);
vertex(642,829+x2);
vertex(635,842+x2);
vertex(644,828+x2);
vertex(645,842+x2);
vertex(643,829+x2);
vertex(654,839+x2);
vertex(642,830+x2);
endShape(CLOSE);
}
