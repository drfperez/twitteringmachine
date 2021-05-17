let mic;
let r,g,b;
let x1,x2;
function setup() {
createCanvas(994,1350); // put setup code here
mic = new p5.AudioIn();
mic.start();
}

function draw() {
x1=sin(frameCount*0.1)*20;
x2=cos(frameCount*0.1)*20;
r=random(255);
g=random(255);
b=random(255);
background(255);
let vol = mic.getLevel();    

let h = map(vol, 0, 1,0, 200);
fill("#b1bdb6");// head picture 1
 beginShape();
 vertex(316,409+h);
 vertex(299,456+h);
 vertex(302,485+h);
 vertex(308,471+h);
 vertex(314,473+h);
 vertex(320,478+h);
 vertex(318,488+h);
 vertex(312,492+h);
 vertex(320,496+h);
 vertex(340,493+h);
 vertex(351,484+h);
 vertex(361,474+h);
 vertex(361,457+h);
 vertex(361,442+h);
 vertex(361,432+h);
 vertex(357,422+h);
 vertex(355,406+h);
 vertex(346,425+h);
 vertex(338,441+h);
 vertex(333,448+h);
 vertex(329,451+h);
 vertex(325,438+h);
 vertex(321,420+h);
 vertex(317,411+h);
 vertex(316,411+h);
 endShape(CLOSE);

 let j = map(vol, 0, 1,0, 200);
fill("#c6c8bb");// eye picture 1
 beginShape();
 vertex(310,471+j);
 vertex(305,475+j);
 vertex(309,483+j);
 vertex(315,481+j);
 vertex(316,476+j);
 vertex(312,471+j);
 vertex(311,471+j);
 endShape(CLOSE);

fill("#3a3532");// tongue picture 1
 beginShape();
vertex(330,441+j);
vertex(329,406+j);
vertex(324,369+j);
vertex(328,329+j);
vertex(334,326+j);
vertex(343,332+j);
vertex(345,381+j);
vertex(335,406+j);
vertex(330,444+j);
endShape(CLOSE);

fill("#312b2b");// hair picture 1 top left
 beginShape();
vertex(300,489+j);
vertex(302,502+j);
vertex(287,500+j);
vertex(293,503+j);
vertex(305,519+j);
vertex(307,501+j);
vertex(305,501+j);
vertex(304,491+j);
endShape(CLOSE);

fill("#312b2b");// hair picture 1 top right
 beginShape();
vertex(318,496+j);
vertex(315,503+j);
vertex(323,499+j);
vertex(312,506+j);
vertex(310,514+j);
vertex(317,507+j);
vertex(314,513+j);
vertex(323,504+j);
endShape(CLOSE);

fill("#312b2");// hair picture 1 down left
 beginShape();
vertex(306,522+j);
vertex(300,527+j);
vertex(290,536+j);
vertex(274,566+j);
vertex(288,542+j);
vertex(276,576+j);
vertex(292,541+j);
vertex(304,526+j);
vertex(278,579+j);
vertex(304,526+j);
vertex(297,557+j);
vertex(295,572+j);
vertex(291,573+j);
vertex(283,611+j);
vertex(285,614+j);
vertex(282,625+j);
vertex(289,612+j);
vertex(286,608+j);
vertex(303,532+j);
vertex(295,583+j);
vertex(299,580+j);
vertex(294,617+j);
vertex(303,548+j);
vertex(307,543+j);
vertex(307,523+j);
endShape(CLOSE);

fill("#312b2");// hair picture 1 down right
 beginShape();
vertex(311,521+j);
vertex(326,553+j);
vertex(338,606+j);
vertex(312,524+j);
vertex(331,609+j);
vertex(312,528+j);
vertex(324,589+j);
vertex(312,532+j);
vertex(317,578+j);
vertex(310,521+j);
vertex(314,574+j);
vertex(311,523+j);
vertex(311,524+j);
endShape(CLOSE);

fill("#494343");// body picture 1
 beginShape();
vertex(310,493+j);
vertex(311,540+j);
vertex(315,607+j);
endShape(CLOSE);

fill("#524d49");// leg picture 1 left
 beginShape();
vertex(315,609+j);
vertex(315,628+j);
vertex(317,628+j);
vertex(324,708+j);
vertex(330,757+j);
vertex(329,850+j);
endShape(CLOSE);

fill("#524d49");// leg picture 1 right
 beginShape();
vertex(316,612+j);
vertex(325,626+j);
vertex(319,626+j);
vertex(317,615+j);
vertex(340,672+j); 
vertex(363,750+j);
vertex(370,793+j);
vertex(379,847+j);
endShape(CLOSE);

fill("#23241e");// foot picture 1 left
 beginShape();
vertex(329,857+j);
vertex(317,871+j);
vertex(329,857+j);
vertex(327,873+j);
vertex(328,860+j);
vertex(341,872+j);
vertex(331,858+j);
endShape(CLOSE);

fill("#23241e");// foot picture 1 right
 beginShape();
vertex(380,851+j);
vertex(370,869+j);
vertex(380,852+j);
vertex(384,873+j);
vertex(381,853+j);
vertex(393,862+j);
vertex(380,852+j);
endShape(CLOSE);

fill("#343434");// tail picture 1
 beginShape();
vertex(327,634+j);
vertex(273,697+j);
vertex(238,754+j);
vertex(226,763+j);
vertex(213,768+j);
vertex(201,766+j);
vertex(183,758+j);
vertex(175,747+j);
vertex(170,736+j);
vertex(172,729+j);
vertex(170,744+j);
vertex(194,766+j);
vertex(218,770+j);
vertex(241,751+j);
vertex(262,715+j);
vertex(284,683+j);
vertex(329,632+j);
vertex(292,693+j);
vertex(275,717+j);
vertex(254,732+j);
vertex(237,737+j);
vertex(202,729+j);
vertex(190,718+j);
vertex(183,702+j);
vertex(184,688+j);
vertex(182,707+j);
vertex(205,732+j);
vertex(251,736+j);
vertex(279,714+j);
vertex(328,634+j);
vertex(257,728+j);
vertex(246,741+j);
vertex(214,751+j);
vertex(193,745+j);
vertex(192,730+j);
vertex(198,722+j);
vertex(210,717+j);
vertex(214,724+j);
endShape(CLOSE);

fill("#cbcdc8");// head picture 2
 beginShape();
vertex(434,645+j);
vertex(435,636+j);
vertex(433,630+j);
vertex(431,626+j);
vertex(432,614+j);
vertex(441,594+j);
vertex(451,587+j);
vertex(470,583+j);
vertex(487,585+j);
vertex(500,599+j);
vertex(500,612+j);
vertex(492,622+j);
vertex(468,645+j);
endShape(CLOSE);

fill("#afafa5");// eye picture 2
 beginShape();
vertex(458,588+j);
vertex(453,589+j);
vertex(453,592+j);
vertex(455,595+j);
vertex(461,596+j);
vertex(462,593+j);
vertex(462,591+j);
vertex(459,589+j);
endShape(CLOSE);

fill("#352b29");// mouth picture 2
 beginShape();
vertex(435,642+j);
vertex(439,631+j);
vertex(445,624+j);
vertex(460,624+j);
vertex(468,629+j);
vertex(471,639+j);
vertex(468,649+j);
vertex(464,640+j);
vertex(460,634+j);
vertex(452,632+j);
vertex(444,635+j);
vertex(436,643+j);
endShape(CLOSE);

fill("#363636");// tongue picture 2
 beginShape();
vertex(459,636+j);
vertex(460,645+j);
vertex(450,662+j);
vertex(456,671+j);
vertex(463,671+j);
vertex(464,666+j);
vertex(461,662+j);
vertex(456,662+j);
vertex(454,660+j);
vertex(462,648+j);
vertex(462,646+j);
vertex(458,635+j);
endShape(CLOSE);

fill("#3a3b40");// hair picture 2
 beginShape();
vertex(432,637+j);
vertex(410,699+j);
vertex(434,636+j);
vertex(415,701+j);
vertex(434,647+j);
vertex(420,706+j);
vertex(439,644+j);
vertex(426,703+j);
vertex(442,641+j);
vertex(433,697+j);
vertex(444,640+j);
endShape(CLOSE);

fill("#393836");// body picture 2 
 beginShape();
vertex(448,595+j);
vertex(448,657+j);
vertex(446,684+j);
vertex(444,711+j);
endShape(CLOSE);

fill("#282629");// leg picture 2 left
 beginShape();
vertex(444,709+j);
vertex(297,858+j);
vertex(283,861+j);
vertex(296,858+j);
vertex(287,866+j);
vertex(296,858+j);
vertex(298,869+j);
vertex(296,858+j);
endShape(CLOSE);

fill("#282629");// leg picture 2 middle
 beginShape();
vertex(443,711+j);
vertex(434,842+j);
vertex(423,856+j);
vertex(432,843+j);
vertex(424,861+j);
vertex(430,846+j);
vertex(427,859+j);
vertex(432,845+j);
vertex(432,859+j);
vertex(433,845+j);
endShape(CLOSE);

fill("#282629");// leg picture 2 right
 beginShape();
vertex(445,710+j);
vertex(510,813+j);
vertex(507,826+j);
vertex(509,814+j);
vertex(515,825+j);
vertex(509,813+j);
vertex(519,817+j);
vertex(509,814+j);
endShape(CLOSE);

fill("#cdd3c5");// head picture 3
 beginShape();
vertex(554,469+j);
vertex(540,467+j);
vertex(523,478+j);
vertex(519,485+j);
vertex(519,490+j);
vertex(522,495+j);
vertex(527,500+j);
vertex(535,504+j);
vertex(547,500+j);
vertex(553,496+j);
vertex(555,491+j);
vertex(545,486+j);
vertex(542,482+j);
vertex(541,479+j);
vertex(541,476+j);
vertex(542,475+j);
vertex(544,471+j);
vertex(552,469+j);
vertex(553,470+j);
endShape(CLOSE);

fill("#cdd3c5");// mouth picture 3 
 beginShape();
vertex(532,469+j);
vertex(519,467+j);
vertex(505,476+j);
vertex(486,500+j);
vertex(500,494+j);
vertex(506,491+j);
vertex(519,490+j);
vertex(507,502+j);
vertex(496,515+j);
vertex(519,511+j);
vertex(538,508+j);
vertex(540,506+j);
vertex(526,501+j);
vertex(519,491+j);
vertex(517,488+j);
vertex(518,482+j);
vertex(524,475+j);
endShape(CLOSE);

fill("#cdd3c5");// tongue picture 3
 beginShape();
vertex(516,490+j);
vertex(503,500+j);
vertex(494,507+j);
vertex(482,509+j);
vertex(475,507+j);
vertex(472,503+j);
vertex(470,497+j);
vertex(470,484+j);
vertex(476,468+j);
endShape(CLOSE);

fill("#cdd3c5");// eye picture 3
 beginShape();
vertex(557,470+j);
vertex(551,470+j);
vertex(547,473+j);
vertex(545,477+j);
vertex(545,482+j);
vertex(547,485+j);
vertex(555,488+j);
vertex(560,487+j);
vertex(562,480+j);
vertex(562,476+j);
vertex(560,471+j);
vertex(557,469+j);
endShape(CLOSE);

fill("#cdd3c5");// hair picture 3
 beginShape();
vertex(563,473+j);
vertex(579,488+j);
vertex(579,508+j);
vertex(571,520+j);
vertex(559,531+j);
vertex(545,533+j);
vertex(539,522+j);
vertex(550,510+j);
vertex(562,510+j);
vertex(579,518+j);
vertex(582,529+j);
vertex(579,544+j);
vertex(566,561+j);
vertex(553,569+j);
vertex(543,571+j);
vertex(534,568+j);
vertex(556,570+j);
vertex(566,560+j);
vertex(574,547+j);
vertex(582,537+j);
vertex(570,562+j);
vertex(558,581+j);
vertex(566,568+j);
vertex(571,557+j);
vertex(581,536+j);
vertex(580,553+j);
vertex(573,564+j);
vertex(564,570+j);
vertex(549,577+j);
vertex(533,579+j);
vertex(531,568+j);
vertex(536,562+j);
vertex(546,554+j);
vertex(556,551+j);
vertex(567,553+j);
vertex(576,559+j);
vertex(575,587+j);
vertex(564,597+j);
vertex(552,607+j);
vertex(541,607+j);
vertex(530,603+j);
vertex(525,602+j);
vertex(553,607+j);
vertex(530,607+j);
vertex(523,597+j);
vertex(523,593+j);
endShape(CLOSE);

fill("#3b3632");// body picture 3
 beginShape();
vertex(549,613+j);
vertex(551,512+j);
vertex(551,487+j);
endShape(CLOSE);

fill("#3b3632");// leg picture 3 left
 beginShape();
vertex(548,616+j);
vertex(488,811+j);
vertex(473,832+j);
vertex(490,807+j);
vertex(486,830+j);
vertex(487,811+j);
vertex(497,826+j);
vertex(489,808+j);
endShape(CLOSE);

fill("#3b3632");// leg picture 3 middle 
 beginShape();
vertex(548,618+j);
vertex(531,790+j);
vertex(516,804+j);
vertex(532,788+j);
vertex(541,796+j);
vertex(533,787+j);
vertex(526,803+j);
vertex(532,789+j);
vertex(540,802+j);
vertex(533,791+j);
vertex(529,807+j);
vertex(531,792+j);
vertex(537,806+j);
vertex(532,792+j);
endShape(CLOSE);

fill("#3b3632");// leg picture 3 right
 beginShape();
vertex(549,615+j);
vertex(609,824+j);
vertex(616,839+j);
vertex(610,825+j);
vertex(624,832+j);
vertex(609,824+j);
endShape(CLOSE);

fill("#3e3f3a");// head picture 4
 beginShape();
vertex(640,612+j);
vertex(640,612+j);
vertex(622,616+j);
vertex(587,622+j);
vertex(576,629+j);
vertex(572,642+j);
vertex(575,651+j);
vertex(583,656+j);
vertex(598,661+j);
vertex(616,658+j);
vertex(653,639+j);
vertex(639,640+j);
vertex(625,637+j);
vertex(616,631+j);
vertex(616,625+j);
vertex(638,614+j);
endShape(CLOSE);

fill("#11191c");// tongue picture 4
 beginShape();
vertex(621,630+j);
vertex(630,626+j);
vertex(627,619+j);
vertex(650,624+j);
vertex(650,613+j);
vertex(654,615+j);
vertex(671,616+j);
vertex(706,609+j);
vertex(626,635+j);
vertex(622,631+j);
endShape(CLOSE);

fill("#4d4a43");// eye picture 4
 beginShape();
vertex(598,622+j);
vertex(592,623+j);
vertex(591,627+j);
vertex(594,631+j);
vertex(601,632+j);
vertex(603,627+j);
vertex(601,624+j);
vertex(599,622+j);
endShape(CLOSE);

fill("#2e2423");// hair picture 4
 beginShape();
vertex(575,632+j);
vertex(547,655+j);
vertex(573,637+j);
vertex(546,660+j);
vertex(576,642+j);
vertex(545,665+j);
vertex(573,650+j);
vertex(579,634+j);
endShape(CLOSE);

fill("#31302e");// body picture 4
 beginShape();
vertex(573,651+j);
vertex(570,681+j);
vertex(564,720+j);
endShape(CLOSE);

fill("#31302e");// leg picture 4 left
 beginShape();
vertex(564,720+j);
vertex(471,797+j);
vertex(402,859+j);
endShape(CLOSE);

fill("#31302e");// leg picture 4 middle
beginShape();
vertex(564,722+j);
vertex(549,818+j);
vertex(542,822+j);
vertex(551,819+j);
vertex(555,828+j);
vertex(551,819+j);
vertex(537,835+j);
vertex(551,819+j);
vertex(552,833+j);
vertex(552,820+j);
vertex(539,842+j);
vertex(551,820+j);
vertex(548,842+j);
vertex(550,822+j);
vertex(536,857+j);
vertex(547,824+j);
vertex(548,843+j);
vertex(548,828+j);
vertex(546,852+j);
vertex(548,830+j);
vertex(540,880+j);
endShape(CLOSE);

fill("#31302e");// leg picture 4 right 
 beginShape();
vertex(563,726+j);
vertex(642,829+j);
vertex(635,842+j);
vertex(644,828+j);
vertex(645,842+j);
vertex(643,829+j);
vertex(654,839+j);
vertex(642,830+j);
endShape(CLOSE);
}
