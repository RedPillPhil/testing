"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[6304], {
		60438: function(n, e, r) {
			r.d(e, {
				Z: function() {
					return h
				}
			});
			var t = r(85893),
				i = (r(67294), r(87379)),
				o = r(57247),
				u = r(23526);

			function c(n, e) {
				return e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, {
					raw: {
						value: Object.freeze(e)
					}
				}))
			}

			function a() {
				var n = c(["\n  0% {\n    background-position: 50% 0%;\n  }\n  50% {\n    background-position: 50% 100%;\n  }\n  100% {\n    background-position: 50% 0%;\n  }\n"]);
				return a = function() {
					return n
				}, n
			}

			function l() {
				var n = c(["\n      animation: ", " 3s ease infinite;\n      background-size: 400% 400%;\n    "]);
				return l = function() {
					return n
				}, n
			}

			function f() {
				var n = c(["\n  box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.2);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: ", ";\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n  ", "\n\n  ", ";\n"]);
				return f = function() {
					return n
				}, n
			}

			function d() {
				var n = c(["\n  width: 100%;\n  height: 100%;\n  overflow: ", ";\n  border-radius: ", ";\n  background-image: linear-gradient(114.4deg, rgba(28, 42, 54, 0.5) 2.31%, rgba(0, 21, 62, 0.2) 98.65%);\n  backdrop-filter: blur(50px);\n"]);
				return d = function() {
					return n
				}, n
			}
			var s = (0, i.F4)(a()),
				p = i.ZP.div.withConfig({
					componentId: "sc-ed7afafc-0"
				})(f(), (function(n) {
					return n.theme.radii.card
				}), (function(n) {
					var e = n.theme,
						r = n.isDisabled;
					return e.colors[r ? "textDisabled" : "text"]
				}), (function(n) {
					return n.isActive && (0, i.iv)(l(), s)
				}), o.Dh),
				v = (0, i.ZP)(u.Z).withConfig({
					componentId: "sc-ed7afafc-1"
				})(d(), (function(n) {
					return n.hasCustomBorder ? "initial" : "inherit"
				}), (function(n) {
					return n.theme.radii.card
				}));

			function b(n, e, r) {
				return e in n ? Object.defineProperty(n, e, {
					value: r,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[e] = r, n
			}

			function g(n, e) {
				if (null == n) return {};
				var r, t, i = function(n, e) {
					if (null == n) return {};
					var r, t, i = {},
						o = Object.keys(n);
					for (t = 0; t < o.length; t++) r = o[t], e.indexOf(r) >= 0 || (i[r] = n[r]);
					return i
				}(n, e);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(n);
					for (t = 0; t < o.length; t++) r = o[t], e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(n, r) && (i[r] = n[r])
				}
				return i
			}
			p.defaultProps = {
				isActive: !1,
				isSuccess: !1,
				isWarning: !1,
				isDisabled: !1
			};
			var h = function(n) {
				var e = n.ribbon,
					r = n.children,
					i = n.background,
					o = g(n, ["ribbon", "children", "background"]);
				return (0, t.jsx)(p, function(n) {
					for (var e = 1; e < arguments.length; e++) {
						var r = null != arguments[e] ? arguments[e] : {},
							t = Object.keys(r);
						"function" === typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(r).filter((function(n) {
							return Object.getOwnPropertyDescriptor(r, n).enumerable
						})))), t.forEach((function(e) {
							b(n, e, r[e])
						}))
					}
					return n
				}({}, o, {
					children: (0, t.jsxs)(v, {
						background: i,
						hasCustomBorder: !!o.borderBackground,
						children: [e, r]
					})
				}))
			}
		},
		6722: function(n, e, r) {
			var t = r(85893),
				i = (r(67294), r(78491));

			function o(n, e, r) {
				return e in n ? Object.defineProperty(n, e, {
					value: r,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[e] = r, n
			}
			e.Z = function(n) {
				return (0, t.jsx)(i.Z, function(n) {
					for (var e = 1; e < arguments.length; e++) {
						var r = null != arguments[e] ? arguments[e] : {},
							t = Object.keys(r);
						"function" === typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(r).filter((function(n) {
							return Object.getOwnPropertyDescriptor(r, n).enumerable
						})))), t.forEach((function(e) {
							o(n, e, r[e])
						}))
					}
					return n
				}({
					viewBox: "0 0 24 24"
				}, n, {
					children: (0, t.jsx)("path", {
						d: "M9.00012 16.2L5.50012 12.7C5.11012 12.31 4.49012 12.31 4.10012 12.7C3.71012 13.09 3.71012 13.71 4.10012 14.1L8.29012 18.29C8.68012 18.68 9.31012 18.68 9.70012 18.29L20.3001 7.70001C20.6901 7.31001 20.6901 6.69001 20.3001 6.30001C19.9101 5.91001 19.2901 5.91001 18.9001 6.30001L9.00012 16.2Z"
					})
				}))
			}
		},
		22590: function(n, e, r) {
			r.d(e, {
				Bz: function() {
					return c
				},
				PM: function() {
					return i
				},
				Q0: function() {
					return s
				},
				Uf: function() {
					return l
				},
				Zw: function() {
					return d
				},
				lN: function() {
					return f
				},
				p9: function() {
					return a
				}
			});
			var t = r(47e3),
				i = t.QA.BigInt(1e4),
				o = (t.QA.BigInt(0), new t.gG("1")),
				u = new t.gG(t.QA.BigInt(30), i),
				c = new t.gG(t.QA.BigInt(100), i),
				a = new t.gG(t.QA.BigInt(300), i),
				l = new t.gG(t.QA.BigInt(500), i),
				f = new t.gG(t.QA.BigInt(1500), i),
				d = o.subtract(u),
				s = {
					42170: "0x6947A425453D04305520E612F0Cb2952E4D07d62",
					42161: "0xbee5c10cf6e4f68f831e11c1d9e59b43560b3642"
				}
		},
		76290: function(n, e, r) {
			r.d(e, {
				P4: function() {
					return l
				},
				U7: function() {
					return a
				},
				oX: function() {
					return f
				}
			});
			var t = r(47e3),
				i = r(22590);

			function o(n, e) {
				(null == e || e > n.length) && (e = n.length);
				for (var r = 0, t = new Array(e); r < e; r++) t[r] = n[r];
				return t
			}

			function u(n, e) {
				return function(n) {
					if (Array.isArray(n)) return n
				}(n) || function(n, e) {
					var r = null == n ? null : "undefined" !== typeof Symbol && n[Symbol.iterator] || n["@@iterator"];
					if (null != r) {
						var t, i, o = [],
							u = !0,
							c = !1;
						try {
							for (r = r.call(n); !(u = (t = r.next()).done) && (o.push(t.value), !e || o.length !== e); u = !0);
						} catch (a) {
							c = !0, i = a
						} finally {
							try {
								u || null == r.return || r.return()
							} finally {
								if (c) throw i
							}
						}
						return o
					}
				}(n, e) || function(n, e) {
					if (!n) return;
					if ("string" === typeof n) return o(n, e);
					var r = Object.prototype.toString.call(n).slice(8, -1);
					"Object" === r && n.constructor && (r = n.constructor.name);
					if ("Map" === r || "Set" === r) return Array.from(r);
					if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return o(n, e)
				}(n, e) || function() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function c(n) {
				var e = n.route,
					r = n.inputAmount,
					i = n.outputAmount;
				return (0, t.oc)(function(n) {
					var e = [],
						r = !0,
						i = !1,
						o = void 0;
					try {
						for (var c, a = n.pairs.entries()[Symbol.iterator](); !(r = (c = a.next()).done); r = !0) {
							var l, f = u(c.value, 2),
								d = f[0],
								s = f[1];
							(null === (l = s) || void 0 === l ? void 0 : l.stableSwapAddress) ? e.push(n.path[d].wrapped.equals(s.price.baseCurrency.wrapped) ? s.price : s.price.invert()): e.push(n.path[d].wrapped.equals(s.token0.wrapped) ? new t.tA(s.reserve0.currency, s.reserve1.currency, s.reserve0.quotient, s.reserve1.quotient) : new t.tA(s.reserve1.currency, s.reserve0.currency, s.reserve1.quotient, s.reserve0.quotient))
						}
					} catch (v) {
						i = !0, o = v
					} finally {
						try {
							r || null == a.return || a.return()
						} finally {
							if (i) throw o
						}
					}
					var p = e.slice(1).reduce((function(n, e) {
						return n.multiply(e)
					}), e[0]);
					return new t.tA(n.input, n.output, p.denominator, null === p || void 0 === p ? void 0 : p.numerator)
				}(e), r, i)
			}

			function a(n) {
				var e, r;
				if (!n) return {
					priceImpactWithoutFee: void 0,
					realizedLPFee: void 0
				};
				var o = n ? t.yC.subtract(null === (e = n.route) || void 0 === e || null === (r = e.pairs) || void 0 === r ? void 0 : r.reduce((function(n, e) {
						var r;
						return n.multiply((null === (r = e) || void 0 === r ? void 0 : r.fee) ? t.yC.subtract(e.fee) : i.Zw)
					}), t.yC)) : void 0,
					u = n && o ? c(n).subtract(o) : void 0;
				return {
					priceImpactWithoutFee: u ? new t.gG(null === u || void 0 === u ? void 0 : u.numerator, null === u || void 0 === u ? void 0 : u.denominator) : void 0,
					realizedLPFee: o && n && t.ih.fromRawAmount(n.inputAmount.currency, o.multiply(n.inputAmount.quotient).quotient)
				}
			}

			function l(n) {
				return new t.gG(t.QA.BigInt(n), i.PM)
			}

			function f(n) {
				return (null === n || void 0 === n ? void 0 : n.lessThan(i.lN)) ? (null === n || void 0 === n ? void 0 : n.lessThan(i.Uf)) ? (null === n || void 0 === n ? void 0 : n.lessThan(i.p9)) ? (null === n || void 0 === n ? void 0 : n.lessThan(i.Bz)) ? 0 : 1 : 2 : 3 : 4
			}
		},
		10608: function(n, e, r) {
			r.d(e, {
				Kh: function() {
					return a
				},
				as: function() {
					return l
				},
				b5: function() {
					return c
				}
			});
			var t = r(47e3),
				i = r(52394),
				o = r(76290);

			function u(n, e, r) {
				return e in n ? Object.defineProperty(n, e, {
					value: r,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[e] = r, n
			}

			function c(n, e) {
				var r, c = (0, o.P4)(e);
				return u(r = {}, i.gN.INPUT, (0, t.w3)(n, c)), u(r, i.gN.OUTPUT, (0, t.cP)(n, c)), r
			}

			function a(n, e) {
				var r, t;
				return n && (null === n || void 0 === n ? void 0 : n.executionPrice) ? e ? "".concat(null === (r = n.executionPrice) || void 0 === r ? void 0 : r.invert().toSignificant(6), " ").concat(n.inputAmount.currency.symbol, " / ").concat(n.outputAmount.currency.symbol) : "".concat(null === (t = n.executionPrice) || void 0 === t ? void 0 : t.toSignificant(6), " ").concat(n.outputAmount.currency.symbol, " / ").concat(n.inputAmount.currency.symbol) : ""
			}
			var l = function(n, e) {
				var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 18;
				if (!n) return 0;
				try {
					return parseFloat(n.toSignificant(r)) * e
				} catch (t) {
					return 0
				}
			}
		},
		78420: function(n, e, r) {
			r.d(e, {
				Z: function() {
					return j
				}
			});
			var t = r(85893),
				i = r(87379),
				o = r(19532),
				u = r(23526),
				c = r(67294);

			function a(n, e) {
				return e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, {
					raw: {
						value: Object.freeze(e)
					}
				}))
			}

			function l() {
				var n = a(["\n  width: 100%;\n  height: ", ";\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  align-items: center;\n  padding-top: 16px;\n  /* padding-right: ", "; */\n  ", " {\n    justify-content: space-between;\n    flex-direction: ", ";\n  }\n"]);
				return l = function() {
					return n
				}, n
			}

			function f() {
				var n = a(["\n  svg {\n    fill: ", ";\n    transition: background-color 0.2s, opacity 0.2s;\n  }\n  &:hover {\n    svg {\n      opacity: 0.65;\n    }\n  }\n  &:active {\n    svg {\n      opacity: 0.85;\n    }\n  }\n"]);
				return f = function() {
					return n
				}, n
			}
			var d = (0, c.memo)(i.ZP.div.withConfig({
					componentId: "sc-6b692981-0"
				})(l(), (function(n) {
					return n.$isSide ? "100%" : "auto"
				}), (function(n) {
					return n.$isSide ? "32px" : "0px"
				}), (function(n) {
					return n.theme.mediaQueries.md
				}), (function(n) {
					return n.$isSide ? "column" : "row"
				}))),
				s = (0, i.ZP)(o.Z).withConfig({
					componentId: "sc-6b692981-1"
				})(f(), (function(n) {
					return n.theme.colors.textSubtle
				})),
				p = function(n) {
					var e = n.variant,
						r = "side" === (void 0 === e ? "default" : e);
					return (0, t.jsxs)(d, {
						$isSide: r,
						children: [r && (0, t.jsx)(o.Z, {
							flexGrow: 1
						}), (0, t.jsx)(o.Z, {
							flexGrow: r ? 0 : 1,
							alignItems: "center",
							width: ["100%", "100%", "100%", r ? "100%" : "auto"],
							justifyContent: ["center", "center", "center", "flex-end"],
							children: (0, t.jsx)(s, {})
						})]
					})
				},
				v = (0, c.memo)(p),
				b = r(64690),
				g = r(81313);

			function h(n, e, r) {
				return e in n ? Object.defineProperty(n, e, {
					value: r,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[e] = r, n
			}

			function m(n) {
				for (var e = 1; e < arguments.length; e++) {
					var r = null != arguments[e] ? arguments[e] : {},
						t = Object.keys(r);
					"function" === typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(r).filter((function(n) {
						return Object.getOwnPropertyDescriptor(r, n).enumerable
					})))), t.forEach((function(e) {
						h(n, e, r[e])
					}))
				}
				return n
			}

			function y(n, e) {
				if (null == n) return {};
				var r, t, i = function(n, e) {
					if (null == n) return {};
					var r, t, i = {},
						o = Object.keys(n);
					for (t = 0; t < o.length; t++) r = o[t], e.indexOf(r) >= 0 || (i[r] = n[r]);
					return i
				}(n, e);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(n);
					for (t = 0; t < o.length; t++) r = o[t], e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(n, r) && (i[r] = n[r])
				}
				return i
			}

			function w() {
				var n, e, r = (n = ["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  padding-top: 30px;\n  padding-bottom: 0;\n  min-height: ", ";\n  background: url('/images/bg/", ".png');\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n\n  ", " {\n    padding-bottom: 0;\n  }\n\n  ", " {\n    padding-bottom: 0;\n    min-height: ", ";\n  }\n"], e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, {
					raw: {
						value: Object.freeze(e)
					}
				})));
				return w = function() {
					return r
				}, r
			}
			var O = i.ZP.div.withConfig({
					componentId: "sc-99ce6e1e-0"
				})(w(), (function(n) {
					return n.$noMinHeight ? "initial" : "calc(100vh - 300px)"
				}), (function(n) {
					return n.from
				}), (function(n) {
					return n.theme.mediaQueries.sm
				}), (function(n) {
					return n.theme.mediaQueries.lg
				}), (function(n) {
					return n.$noMinHeight ? "initial" : "calc(100vh - 400px)"
				})),
				j = function(n) {
					var e = n.children,
						r = n.removePadding,
						i = void 0 !== r && r,
						c = n.hideFooterOnDesktop,
						a = void 0 !== c && c,
						l = n.noMinHeight,
						f = void 0 !== l && l,
						d = n.helpUrl,
						s = void 0 === d ? g.SO : d,
						p = y(n, ["children", "removePadding", "hideFooterOnDesktop", "noMinHeight", "helpUrl"]);
					return (0, t.jsxs)(t.Fragment, {
						children: [(0, t.jsx)(b.V, {}), (0, t.jsxs)(O, m({
							$removePadding: i,
							$noMinHeight: f
						}, p, {
							children: [e, (0, t.jsx)(o.Z, {
								flexGrow: 1
							}), (0, t.jsx)(u.Z, {
								display: ["block", null, null, a ? "none" : "block"],
								width: "100%",
								children: (0, t.jsx)(v, {
									helpUrl: s
								})
							})]
						}))]
					})
				}
		}
	}
]);
