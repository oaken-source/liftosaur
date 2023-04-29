/* eslint-disable @typescript-eslint/no-explicit-any */
// This file was generated by lezer-generator. You probably shouldn't edit it.
import { LRParser } from "@lezer/lr";
const spec_Keyword = { __proto__: null, if: 74, else: 76 };
export const parser = LRParser.deserialize({
  version: 14,
  states:
    "(|Q]QPOOO!YQPO'#CsOOQO'#Cd'#CdO!yQPO'#CdO$YQPO'#CzO]QPO'#ChO$aQPO'#CiO$hQPO'#CkO$mQPO'#CzO$tQPO'#CpO]QPO'#CqOOQO'#Cz'#CzQ]QPOOO]QPO,58yO]QPO,58yO]QPO,58yO]QPO,58yO]QPO,59UOOQO,59O,59OOOQO,59Q,59QO&RQPO,59SOOQO,59T,59TO&YQPO,59TO&aQPO,59VO]QPO,59XO&fQPO,59ZO]QPO,59[OOQO,59],59]OOQO-E6q-E6qO'wQPO1G.eOOQO1G.e1G.eO(OQPO1G.eO(VQPO1G.eO)aQPO1G.pOOQO1G.n1G.nOOQO1G.o1G.oO)hQPO1G.qO*uQPO1G.sO+rQPO1G.uO]QPO'#CuO+|QPO1G.uOOQO1G.u1G.uO,UQPO1G.vO]QPO7+$[O,]QPO7+$]O,eQPO7+$]O-rQPO7+$aOOQO7+$a7+$aO-zQPO,59aOOQO-E6s-E6sOOQO7+$b7+$bO.UQPO<<GvO$hQPO,59`OOQO<<Gw<<GwO,]QPO<<GwOOQO-E6r-E6rOOQO<<G{<<G{O&aQPO1G.zOOQOAN=cAN=cP,`QPO'#CtOOQO7+$f7+$f",
  stateData:
    "/[~OlOSPOSmOS~OSROXQO`XObWOfYOoTOqUOuVO~OS]OT^OU_OV`OsaO~OXgX`gXbgXfgXjgXogXqgXugXrgX~PwOXbO~OSnXTnXUnXVnXXnX`nXbnXfnXjnXonXqnXsnXunXpnXrnXtnXxnXznX~OZcO~P#OOreO~P]OoTO~OwhO~P#OOoiOyjOSdXTdXUdXVdXXdX`dXbdXfdXjdXqdXsdXudXpdXrdXtdXxdXzdX~OprO~PwOrsO~P]OqUO~OpyOxwO~P]OT^OURiVRiXRi`RibRifRijRioRiqRisRiuRipRirRitRixRizRi~OSRi~P&pOS]O~P&pOS]OT^OU_OVRiXRi`RibRifRijRioRiqRisRiuRipRirRitRixRizRi~Ot{O~PwOv|OS_iT_iU_iV_iX_i`_ib_if_ij_io_iq_is_iu_ip_ir_it_ix_iz_i~OXai`aibaifaijaioaiqaiuaipairaitaixaizai~PwOp!POxwO~PwOp!POxwO~Oz!SO~PwOqUOu!UO~Ov!WOS_qT_qU_qV_qX_q`_qb_qf_qj_qo_qq_qs_qu_qp_qr_qt_qx_qz_q~Op!YOxwO~Opiaxia~PwOX^y`^yb^yf^yj^yo^yq^yu^yp^yr^yt^yx^yz^y~PwOPTXSbZb`~",
  goto:
    "%UoPPPpPPPP!SPpP!f#OppPpPpppP#n#x$OPPPP$YqZOTUY[]^_`afhijw{qSOTUY[]^_`afhijw{pZOTUY[]^_`afhijw{QgVR!Z!UpZOTUY[]^_`afhijw{QtgQ!V|Q![!WR!^!ZQ[OQfUTl[fQ}tR!X}QxiQ!OvT!Rx!OWPOU[fQdTQkYQm]Qn^Qo_Qp`QqaQuhQviQzjQ!QwR!T{",
  nodeNames:
    "⚠ LineComment Program BinaryExpression Plus Times Cmp AndOr NumberExpression Number WeightExpression Unit ParenthesisExpression BlockExpression Ternary IfExpression Keyword AssignmentExpression StateVariable FunctionExpression VariableExpression UnaryExpression Not",
  maxTerm: 42,
  skippedNodes: [0, 1],
  repeatNodeCount: 3,
  tokenData:
    ",j~RxX^#opq#oqr$duv$qvw$vxy%Ryz%Wz{$q{|%]|}%b}!O%]!O!P%g!P!Q%u!Q![&f![!]'[!]!^'a!^!_'f!_!`'n!`!a'f!a!b'v!c!}'{!}#O(Z#P#Q(`#T#_'{#_#`(e#`#a)Z#a#g'{#g#h)o#h#o'{#o#p,Y#p#q,_#q#r,e#y#z#o$f$g#o#BY#BZ#o$IS$I_#o$I|$JO#o$JT$JU#o$KV$KW#o&FU&FV#o~#tYl~X^#opq#o#y#z#o$f$g#o#BY#BZ#o$IS$I_#o$I|$JO#o$JT$JU#o$KV$KW#o&FU&FV#o~$iPf~!_!`$l~$qOU~~$vOT~~$yPvw$|~%ROV~~%WOo~~%]Op~~%bOS~~%gOx~~%jP!Q![%m~%rPX~!Q![%m~%zPT~!P!Q%}~&SSP~OY%}Z;'S%};'S;=`&`<%lO%}~&cP;=`<%l%}~&kQX~!O!P&q!Q![&f~&vPX~!Q![&y~'OQX~!O!P'U!Q![&y~'XP!Q![&y~'aOt~~'fOm~~'kPU~!_!`$l~'sPw~!_!`$l~'{Os~~(QR`~!Q!['{!c!}'{#T#o'{~(`Oy~~(eOz~~(jT`~!Q!['{!c!}'{#T#Z'{#Z#[(y#[#o'{~)QRZ~`~!Q!['{!c!}'{#T#o'{~)`T`~!Q!['{!c!}'{#T#U'{#U#V(y#V#o'{~)tT`~!Q!['{!c!}'{#T#h'{#h#i*T#i#o'{~*YS`~!Q!['{!c!}'{#T#U*f#U#o'{~*kT`~!Q!['{!c!}'{#T#h'{#h#i*z#i#o'{~+PT`~!Q!['{!c!}'{#T#X'{#X#Y+`#Y#o'{~+eS`~!O!P+q!Q!['{!c!}'{#T#o'{~+tQ!c!}+z#T#o+z~,PRb~!Q![+z!c!}+z#T#o+z~,_Oq~~,bP#p#q$|~,jOr~",
  tokenizers: [0],
  topRules: { Program: [0, 2] },
  specialized: [{ term: 16, get: (value: any) => (spec_Keyword as any)[value] || -1 }],
  tokenPrec: 647,
});
