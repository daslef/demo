!(function (t) {
    var e = {};
    function r(n) {
        if (e[n]) return e[n].exports;
        var o = (e[n] = { i: n, l: !1, exports: {} });
        return t[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
    }
    (r.m = t),
        (r.c = e),
        (r.d = function (t, e, n) {
            r.o(t, e) ||
                Object.defineProperty(t, e, { enumerable: !0, get: n });
        }),
        (r.r = function (t) {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(t, Symbol.toStringTag, {
                    value: 'Module',
                }),
                Object.defineProperty(t, '__esModule', { value: !0 });
        }),
        (r.t = function (t, e) {
            if ((1 & e && (t = r(t)), 8 & e)) return t;
            if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
            var n = Object.create(null);
            if (
                (r.r(n),
                Object.defineProperty(n, 'default', {
                    enumerable: !0,
                    value: t,
                }),
                2 & e && 'string' != typeof t)
            )
                for (var o in t)
                    r.d(
                        n,
                        o,
                        function (e) {
                            return t[e];
                        }.bind(null, o)
                    );
            return n;
        }),
        (r.n = function (t) {
            var e =
                t && t.__esModule
                    ? function () {
                          return t.default;
                      }
                    : function () {
                          return t;
                      };
            return r.d(e, 'a', e), e;
        }),
        (r.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }),
        (r.p = '/build/'),
        r((r.s = 6));
})([
    function (t, e) {
        t.exports = require('webix-jet');
    },
    ,
    ,
    ,
    ,
    ,
    function (t, e, r) {
        'use strict';
        r.r(e),
            r.d(e, 'default', function () {
                return s;
            });
        r(7);
        var n = r(0);
        function o(t) {
            return (o =
                'function' == typeof Symbol &&
                'symbol' == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t &&
                              'function' == typeof Symbol &&
                              t.constructor === Symbol &&
                              t !== Symbol.prototype
                              ? 'symbol'
                              : typeof t;
                      })(t);
        }
        function u(t, e) {
            var r = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                e &&
                    (n = n.filter(function (e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })),
                    r.push.apply(r, n);
            }
            return r;
        }
        function c(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {};
                e % 2
                    ? u(Object(r), !0).forEach(function (e) {
                          i(t, e, r[e]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                          t,
                          Object.getOwnPropertyDescriptors(r)
                      )
                    : u(Object(r)).forEach(function (e) {
                          Object.defineProperty(
                              t,
                              e,
                              Object.getOwnPropertyDescriptor(r, e)
                          );
                      });
            }
            return t;
        }
        function i(t, e, r) {
            return (
                e in t
                    ? Object.defineProperty(t, e, {
                          value: r,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (t[e] = r),
                t
            );
        }
        function f(t, e) {
            return (f =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        function l(t) {
            var e = (function () {
                if ('undefined' == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                    return (
                        Boolean.prototype.valueOf.call(
                            Reflect.construct(Boolean, [], function () {})
                        ),
                        !0
                    );
                } catch (t) {
                    return !1;
                }
            })();
            return function () {
                var r,
                    n = p(t);
                if (e) {
                    var o = p(this).constructor;
                    r = Reflect.construct(n, arguments, o);
                } else r = n.apply(this, arguments);
                return a(this, r);
            };
        }
        function a(t, e) {
            return !e || ('object' !== o(e) && 'function' != typeof e)
                ? (function (t) {
                      if (void 0 === t)
                          throw new ReferenceError(
                              "this hasn't been initialised - super() hasn't been called"
                          );
                      return t;
                  })(t)
                : e;
        }
        function p(t) {
            return (p = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        var s = (function (t) {
                !(function (t, e) {
                    if ('function' != typeof e && null !== e)
                        throw new TypeError(
                            'Super expression must either be null or a function'
                        );
                    (t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0,
                        },
                    })),
                        e && f(t, e);
                })(r, t);
                var e = l(r);
                function r(t) {
                    !(function (t, e) {
                        if (!(t instanceof e))
                            throw new TypeError(
                                'Cannot call a class as a function'
                            );
                    })(this, r);
                    var o = {
                        id: 'webix-jet-app',
                        version: '1.1.0',
                        router: n.HashRouter,
                        debug: !1,
                        start: '/layout/start',
                    };
                    return e.call(this, c(c({}, o), t));
                }
                return r;
            })(n.JetApp),
            y = new s();
        webix.ready(function () {
            y.use(n.plugins.Locale, { lang: 'ru' }), y.render();
        });
    },
    function (t, e, r) {},
]);
