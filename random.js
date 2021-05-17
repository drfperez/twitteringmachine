//let mic;
let r,g,b;
//let x1,x2;
function setup() {
createCanvas(994,1350); // put setup code here
//mic = new p5.AudioIn();
//mic.start();
}

function draw() {
//x1=sin(frameCount*0.1)*20;
//x2=cos(frameCount*0.1)*20;
r=random(-10,10);
g=random(-2,2);
b=random(255);
background(255);
//let vol = mic.getLevel();    

//let h = map(vol, 0, 1,0, 200);
fill(b);// head picture 1
 beginShape();
 vertex(316,409+r);
 vertex(299,456+r);
 vertex(302,485+r);
 vertex(308,471+r);
 vertex(314,473+r);
 vertex(320,478+r);
 vertex(318,488+r);
 vertex(312,492+r);
 vertex(320,496+r);
 vertex(340,493+r);
 vertex(351,484+r);
 vertex(361,474+r);
 vertex(361,457+r);
 vertex(361,442+r);
 vertex(361,432+r);
 vertex(357,422+r);
 vertex(355,406+r);
 vertex(346,425+r);
 vertex(338,441+r);
 vertex(333,448+r);
 vertex(329,451+r);
 vertex(325,438+r);
 vertex(321,420+r);
 vertex(317,411+r);
 vertex(316,411+r);
 endShape(CLOSE);

 //let j = map(vol, 0, 1,0, 200);
fill("#c6c8bb");// eye picture 1
 beginShape();
 vertex(310,471+g);
 vertex(305,475+g);
 vertex(309,483+g);
 vertex(315,481+g);
 vertex(316,476+g);
 vertex(312,471+g);
 vertex(311,471+g);
 endShape(CLOSE);

fill("#3a3532");// tongue picture 1
 beginShape();
vertex(330,441+g);
vertex(329,406+g);
vertex(324,369+g);
vertex(328,329+g);
vertex(334,326+g);
vertex(343,332+g);
vertex(345,381+g);
vertex(335,406+g);
vertex(330,444+g);
endShape(CLOSE);

fill("#312b2b");// hair picture 1 top left
 beginShape();
vertex(300,489+g);
vertex(302,502+g);
vertex(287,500+g);
vertex(293,503+g);
vertex(305,519+g);
vertex(307,501+g);
vertex(305,501+g);
vertex(304,491+g);
endShape(CLOSE);

fill("#312b2b");// hair picture 1 top right
 beginShape();
vertex(318,496+g);
vertex(315,503+g);
vertex(323,499+g);
vertex(312,506+g);
vertex(310,514+g);
vertex(317,507+g);
vertex(314,513+g);
vertex(323,504+g);
endShape(CLOSE);

fill("#312b2");// hair picture 1 down left
 beginShape();
vertex(306,522+g);
vertex(300,527+g);
vertex(290,536+g);
vertex(274,566+g);
vertex(288,542+g);
vertex(276,576+g);
vertex(292,541+g);
vertex(304,526+g);
vertex(278,579+g);
vertex(304,526+g);
vertex(297,557+g);
vertex(295,572+g);
vertex(291,573+g);
vertex(283,611+g);
vertex(285,614+g);
vertex(282,625+g);
vertex(289,612+g);
vertex(286,608+g);
vertex(303,532+g);
vertex(295,583+g);
vertex(299,580+g);
vertex(294,617+g);
vertex(303,548+g);
vertex(307,543+g);
vertex(307,523+g);
endShape(CLOSE);

fill("#312b2");// hair picture 1 down right
 beginShape();
vertex(311,521+g);
vertex(326,553+g);
vertex(338,606+g);
vertex(312,524+g);
vertex(331,609+g);
vertex(312,528+g);
vertex(324,589+g);
vertex(312,532+g);
vertex(317,578+g);
vertex(310,521+g);
vertex(314,574+g);
vertex(311,523+g);
vertex(311,524+g);
endShape(CLOSE);

fill("#494343");// body picture 1
 beginShape();
vertex(310,493+g);
vertex(311,540+g);
vertex(315,607+g);
endShape(CLOSE);

fill("#524d49");// leg picture 1 left
 beginShape();
vertex(315,609+g);
vertex(315,628+g);
vertex(317,628+g);
vertex(324,708+g);
vertex(330,757+g);
vertex(329,850+g);
endShape(CLOSE);

fill("#524d49");// leg picture 1 right
 beginShape();
vertex(316,612+g);
vertex(325,626+g);
vertex(319,626+g);
vertex(317,615+g);
vertex(340,672+g); 
vertex(363,750+g);
vertex(370,793+g);
vertex(379,847+g);
endShape(CLOSE);

fill("#23241e");// foot picture 1 left
 beginShape();
vertex(329,857+g);
vertex(317,871+g);
vertex(329,857+g);
vertex(327,873+g);
vertex(328,860+g);
vertex(341,872+g);
vertex(331,858+g);
endShape(CLOSE);

fill("#23241e");// foot picture 1 right
 beginShape();
vertex(380,851+g);
vertex(370,869+g);
vertex(380,852+g);
vertex(384,873+g);
vertex(381,853+g);
vertex(393,862+g);
vertex(380,852+g);
endShape(CLOSE);

fill("#343434");// tail picture 1
 beginShape();
vertex(327,634+g);
vertex(273,697+g);
vertex(238,754+g);
vertex(226,763+g);
vertex(213,768+g);
vertex(201,766+g);
vertex(183,758+g);
vertex(175,747+g);
vertex(170,736+g);
vertex(172,729+g);
vertex(170,744+g);
vertex(194,766+g);
vertex(218,770+g);
vertex(241,751+g);
vertex(262,715+g);
vertex(284,683+g);
vertex(329,632+g);
vertex(292,693+g);
vertex(275,717+g);
vertex(254,732+g);
vertex(237,737+g);
vertex(202,729+g);
vertex(190,718+g);
vertex(183,702+g);
vertex(184,688+g);
vertex(182,707+g);
vertex(205,732+g);
vertex(251,736+g);
vertex(279,714+g);
vertex(328,634+g);
vertex(257,728+g);
vertex(246,741+g);
vertex(214,751+g);
vertex(193,745+g);
vertex(192,730+g);
vertex(198,722+g);
vertex(210,717+g);
vertex(214,724+g);
endShape(CLOSE);

fill("#cbcdc8");// head picture 2
 beginShape();
vertex(434,645+g);
vertex(435,636+g);
vertex(433,630+g);
vertex(431,626+g);
vertex(432,614+g);
vertex(441,594+g);
vertex(451,587+g);
vertex(470,583+g);
vertex(487,585+g);
vertex(500,599+g);
vertex(500,612+g);
vertex(492,622+g);
vertex(468,645+g);
endShape(CLOSE);

fill("#afafa5");// eye picture 2
 beginShape();
vertex(458,588+g);
vertex(453,589+g);
vertex(453,592+g);
vertex(455,595+g);
vertex(461,596+g);
vertex(462,593+g);
vertex(462,591+g);
vertex(459,589+g);
endShape(CLOSE);

fill("#352b29");// mouth picture 2
 beginShape();
vertex(435,642+g);
vertex(439,631+g);
vertex(445,624+g);
vertex(460,624+g);
vertex(468,629+g);
vertex(471,639+g);
vertex(468,649+g);
vertex(464,640+g);
vertex(460,634+g);
vertex(452,632+g);
vertex(444,635+g);
vertex(436,643+g);
endShape(CLOSE);

fill("#363636");// tongue picture 2
 beginShape();
vertex(459,636+g);
vertex(460,645+g);
vertex(450,662+g);
vertex(456,671+g);
vertex(463,671+g);
vertex(464,666+g);
vertex(461,662+g);
vertex(456,662+g);
vertex(454,660+g);
vertex(462,648+g);
vertex(462,646+g);
vertex(458,635+g);
endShape(CLOSE);

fill("#3a3b40");// hair picture 2
 beginShape();
vertex(432,637+g);
vertex(410,699+g);
vertex(434,636+g);
vertex(415,701+g);
vertex(434,647+g);
vertex(420,706+g);
vertex(439,644+g);
vertex(426,703+g);
vertex(442,641+g);
vertex(433,697+g);
vertex(444,640+g);
endShape(CLOSE);

fill("#393836");// body picture 2 
 beginShape();
vertex(448,595+g);
vertex(448,657+g);
vertex(446,684+g);
vertex(444,711+g);
endShape(CLOSE);

fill("#282629");// leg picture 2 left
 beginShape();
vertex(444,709+g);
vertex(297,858+g);
vertex(283,861+g);
vertex(296,858+g);
vertex(287,866+g);
vertex(296,858+g);
vertex(298,869+g);
vertex(296,858+g);
endShape(CLOSE);

fill("#282629");// leg picture 2 middle
 beginShape();
vertex(443,711+g);
vertex(434,842+g);
vertex(423,856+g);
vertex(432,843+g);
vertex(424,861+g);
vertex(430,846+g);
vertex(427,859+g);
vertex(432,845+g);
vertex(432,859+g);
vertex(433,845+g);
endShape(CLOSE);

fill("#282629");// leg picture 2 right
 beginShape();
vertex(445,710+g);
vertex(510,813+g);
vertex(507,826+g);
vertex(509,814+g);
vertex(515,825+g);
vertex(509,813+g);
vertex(519,817+g);
vertex(509,814+g);
endShape(CLOSE);

fill("#cdd3c5");// head picture 3
 beginShape();
vertex(554,469+g);
vertex(540,467+g);
vertex(523,478+g);
vertex(519,485+g);
vertex(519,490+g);
vertex(522,495+g);
vertex(527,500+g);
vertex(535,504+g);
vertex(547,500+g);
vertex(553,496+g);
vertex(555,491+g);
vertex(545,486+g);
vertex(542,482+g);
vertex(541,479+g);
vertex(541,476+g);
vertex(542,475+g);
vertex(544,471+g);
vertex(552,469+g);
vertex(553,470+g);
endShape(CLOSE);

fill("#cdd3c5");// mouth picture 3 
 beginShape();
vertex(532,469+g);
vertex(519,467+g);
vertex(505,476+g);
vertex(486,500+g);
vertex(500,494+g);
vertex(506,491+g);
vertex(519,490+g);
vertex(507,502+g);
vertex(496,515+g);
vertex(519,511+g);
vertex(538,508+g);
vertex(540,506+g);
vertex(526,501+g);
vertex(519,491+g);
vertex(517,488+g);
vertex(518,482+g);
vertex(524,475+g);
endShape(CLOSE);

fill("#cdd3c5");// tongue picture 3
 beginShape();
vertex(516,490+g);
vertex(503,500+g);
vertex(494,507+g);
vertex(482,509+g);
vertex(475,507+g);
vertex(472,503+g);
vertex(470,497+g);
vertex(470,484+g);
vertex(476,468+g);
endShape(CLOSE);

fill("#cdd3c5");// eye picture 3
 beginShape();
vertex(557,470+g);
vertex(551,470+g);
vertex(547,473+g);
vertex(545,477+g);
vertex(545,482+g);
vertex(547,485+g);
vertex(555,488+g);
vertex(560,487+g);
vertex(562,480+g);
vertex(562,476+g);
vertex(560,471+g);
vertex(557,469+g);
endShape(CLOSE);

fill("#cdd3c5");// hair picture 3
 beginShape();
vertex(563,473+g);
vertex(579,488+g);
vertex(579,508+g);
vertex(571,520+g);
vertex(559,531+g);
vertex(545,533+g);
vertex(539,522+g);
vertex(550,510+g);
vertex(562,510+g);
vertex(579,518+g);
vertex(582,529+g);
vertex(579,544+g);
vertex(566,561+g);
vertex(553,569+g);
vertex(543,571+g);
vertex(534,568+g);
vertex(556,570+g);
vertex(566,560+g);
vertex(574,547+g);
vertex(582,537+g);
vertex(570,562+g);
vertex(558,581+g);
vertex(566,568+g);
vertex(571,557+g);
vertex(581,536+g);
vertex(580,553+g);
vertex(573,564+g);
vertex(564,570+g);
vertex(549,577+g);
vertex(533,579+g);
vertex(531,568+g);
vertex(536,562+g);
vertex(546,554+g);
vertex(556,551+g);
vertex(567,553+g);
vertex(576,559+g);
vertex(575,587+g);
vertex(564,597+g);
vertex(552,607+g);
vertex(541,607+g);
vertex(530,603+g);
vertex(525,602+g);
vertex(553,607+g);
vertex(530,607+g);
vertex(523,597+g);
vertex(523,593+g);
endShape(CLOSE);

fill("#3b3632");// body picture 3
 beginShape();
vertex(549,613+g);
vertex(551,512+g);
vertex(551,487+g);
endShape(CLOSE);

fill("#3b3632");// leg picture 3 left
 beginShape();
vertex(548,616+g);
vertex(488,811+g);
vertex(473,832+g);
vertex(490,807+g);
vertex(486,830+g);
vertex(487,811+g);
vertex(497,826+g);
vertex(489,808+g);
endShape(CLOSE);

fill("#3b3632");// leg picture 3 middle 
 beginShape();
vertex(548,618+g);
vertex(531,790+g);
vertex(516,804+g);
vertex(532,788+g);
vertex(541,796+g);
vertex(533,787+g);
vertex(526,803+g);
vertex(532,789+g);
vertex(540,802+g);
vertex(533,791+g);
vertex(529,807+g);
vertex(531,792+g);
vertex(537,806+g);
vertex(532,792+g);
endShape(CLOSE);

fill("#3b3632");// leg picture 3 right
 beginShape();
vertex(549,615+g);
vertex(609,824+g);
vertex(616,839+g);
vertex(610,825+g);
vertex(624,832+g);
vertex(609,824+g);
endShape(CLOSE);

fill("#3e3f3a");// head picture 4
 beginShape();
vertex(640,612+g);
vertex(640,612+g);
vertex(622,616+g);
vertex(587,622+g);
vertex(576,629+g);
vertex(572,642+g);
vertex(575,651+g);
vertex(583,656+g);
vertex(598,661+g);
vertex(616,658+g);
vertex(653,639+g);
vertex(639,640+g);
vertex(625,637+g);
vertex(616,631+g);
vertex(616,625+g);
vertex(638,614+g);
endShape(CLOSE);

fill("#11191c");// tongue picture 4
 beginShape();
vertex(621,630+g);
vertex(630,626+g);
vertex(627,619+g);
vertex(650,624+g);
vertex(650,613+g);
vertex(654,615+g);
vertex(671,616+g);
vertex(706,609+g);
vertex(626,635+g);
vertex(622,631+g);
endShape(CLOSE);

fill("#4d4a43");// eye picture 4
 beginShape();
vertex(598,622+g);
vertex(592,623+g);
vertex(591,627+g);
vertex(594,631+g);
vertex(601,632+g);
vertex(603,627+g);
vertex(601,624+g);
vertex(599,622+g);
endShape(CLOSE);

fill("#2e2423");// hair picture 4
 beginShape();
vertex(575,632+g);
vertex(547,655+g);
vertex(573,637+g);
vertex(546,660+g);
vertex(576,642+g);
vertex(545,665+g);
vertex(573,650+g);
vertex(579,634+g);
endShape(CLOSE);

fill("#31302e");// body picture 4
 beginShape();
vertex(573,651+g);
vertex(570,681+g);
vertex(564,720+g);
endShape(CLOSE);

fill("#31302e");// leg picture 4 left
 beginShape();
vertex(564,720+g);
vertex(471,797+g);
vertex(402,859+g);
endShape(CLOSE);

fill("#31302e");// leg picture 4 middle
beginShape();
vertex(564,722+g);
vertex(549,818+g);
vertex(542,822+g);
vertex(551,819+g);
vertex(555,828+g);
vertex(551,819+g);
vertex(537,835+g);
vertex(551,819+g);
vertex(552,833+g);
vertex(552,820+g);
vertex(539,842+g);
vertex(551,820+g);
vertex(548,842+g);
vertex(550,822+g);
vertex(536,857+g);
vertex(547,824+g);
vertex(548,843+g);
vertex(548,828+g);
vertex(546,852+g);
vertex(548,830+g);
vertex(540,880+g);
endShape(CLOSE);

fill("#31302e");// leg picture 4 right 
 beginShape();
vertex(563,726+g);
vertex(642,829+g);
vertex(635,842+g);
vertex(644,828+g);
vertex(645,842+g);
vertex(643,829+g);
vertex(654,839+g);
vertex(642,830+g);
endShape(CLOSE);
}
