!(function (t) {
    var e = {};
    function n(r) {
        if (e[r]) return e[r].exports;
        var i = (e[r] = { i: r, l: !1, exports: {} });
        return t[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
    }
    (n.m = t),
        (n.c = e),
        (n.d = function (t, e, r) {
            n.o(t, e) ||
                Object.defineProperty(t, e, { enumerable: !0, get: r });
        }),
        (n.r = function (t) {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(t, Symbol.toStringTag, {
                    value: 'Module',
                }),
                Object.defineProperty(t, '__esModule', { value: !0 });
        }),
        (n.t = function (t, e) {
            if ((1 & e && (t = n(t)), 8 & e)) return t;
            if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
            var r = Object.create(null);
            if (
                (n.r(r),
                Object.defineProperty(r, 'default', {
                    enumerable: !0,
                    value: t,
                }),
                2 & e && 'string' != typeof t)
            )
                for (var i in t)
                    n.d(
                        r,
                        i,
                        function (e) {
                            return t[e];
                        }.bind(null, i)
                    );
            return r;
        }),
        (n.n = function (t) {
            var e =
                t && t.__esModule
                    ? function () {
                          return t.default;
                      }
                    : function () {
                          return t;
                      };
            return n.d(e, 'a', e), e;
        }),
        (n.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }),
        (n.p = '/build/'),
        n((n.s = 11));
})([
    function (t, e, n) {
        'use strict';
        function r(t) {
            '@babel/helpers - typeof';
            return (r =
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
        function i(t, e, n) {
            return (i =
                'undefined' != typeof Reflect && Reflect.get
                    ? Reflect.get
                    : function (t, e, n) {
                          var r = (function (t, e) {
                              for (
                                  ;
                                  !Object.prototype.hasOwnProperty.call(t, e) &&
                                  null !== (t = c(t));

                              );
                              return t;
                          })(t, e);
                          if (r) {
                              var i = Object.getOwnPropertyDescriptor(r, e);
                              return i.get ? i.get.call(n) : i.value;
                          }
                      })(t, e, n || t);
        }
        function o(t, e) {
            if ('function' != typeof e && null !== e)
                throw new TypeError(
                    'Super expression must either be null or a function'
                );
            (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
            })),
                e && u(t, e);
        }
        function u(t, e) {
            return (u =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        function a(t) {
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
                var n,
                    i = c(t);
                if (e) {
                    var o = c(this).constructor;
                    n = Reflect.construct(i, arguments, o);
                } else n = i.apply(this, arguments);
                return (function (t, e) {
                    if (e && ('object' === r(e) || 'function' == typeof e))
                        return e;
                    return s(t);
                })(this, n);
            };
        }
        function s(t) {
            if (void 0 === t)
                throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                );
            return t;
        }
        function c(t) {
            return (c = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        function f(t, e) {
            var n =
                ('undefined' != typeof Symbol && t[Symbol.iterator]) ||
                t['@@iterator'];
            if (!n) {
                if (
                    Array.isArray(t) ||
                    (n = (function (t, e) {
                        if (!t) return;
                        if ('string' == typeof t) return l(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        'Object' === n &&
                            t.constructor &&
                            (n = t.constructor.name);
                        if ('Map' === n || 'Set' === n) return Array.from(t);
                        if (
                            'Arguments' === n ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                        )
                            return l(t, e);
                    })(t)) ||
                    (e && t && 'number' == typeof t.length)
                ) {
                    n && (t = n);
                    var r = 0,
                        i = function () {};
                    return {
                        s: i,
                        n: function () {
                            return r >= t.length
                                ? { done: !0 }
                                : { done: !1, value: t[r++] };
                        },
                        e: function (t) {
                            throw t;
                        },
                        f: i,
                    };
                }
                throw new TypeError(
                    'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                );
            }
            var o,
                u = !0,
                a = !1;
            return {
                s: function () {
                    n = n.call(t);
                },
                n: function () {
                    var t = n.next();
                    return (u = t.done), t;
                },
                e: function (t) {
                    (a = !0), (o = t);
                },
                f: function () {
                    try {
                        u || null == n.return || n.return();
                    } finally {
                        if (a) throw o;
                    }
                },
            };
        }
        function l(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
            return r;
        }
        function h(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    'value' in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r);
            }
        }
        function p(t, e, n) {
            return e && h(t.prototype, e), n && h(t, n), t;
        }
        function v(t, e) {
            if (!(t instanceof e))
                throw new TypeError('Cannot call a class as a function');
        }
        n.d(e, 'd', function () {
            return G;
        }),
            n.d(e, 'b', function () {
                return E;
            }),
            n.d(e, 'c', function () {
                return _;
            }),
            n.d(e, 'a', function () {
                return j;
            });
        var y = function t() {
                v(this, t);
            },
            d = (function () {
                function t(e) {
                    v(this, t),
                        (this.webixJet = !0),
                        (this.webix = e),
                        (this._events = []),
                        (this._subs = {}),
                        (this._data = {});
                }
                return (
                    p(t, [
                        {
                            key: 'getRoot',
                            value: function () {
                                return this._root;
                            },
                        },
                        {
                            key: 'destructor',
                            value: function () {
                                this._detachEvents(),
                                    this._destroySubs(),
                                    (this._events =
                                        this._container =
                                        this.app =
                                        this._parent =
                                        this._root =
                                            null);
                            },
                        },
                        {
                            key: 'setParam',
                            value: function (t, e, n) {
                                if (
                                    this._data[t] !== e &&
                                    ((this._data[t] = e),
                                    this._segment.update(t, e, 0),
                                    n)
                                )
                                    return this.show(null);
                            },
                        },
                        {
                            key: 'getParam',
                            value: function (t, e) {
                                var n = this._data[t];
                                if (void 0 !== n || !e) return n;
                                var r = this.getParentView();
                                return r ? r.getParam(t, e) : void 0;
                            },
                        },
                        {
                            key: 'getUrl',
                            value: function () {
                                return this._segment.suburl();
                            },
                        },
                        {
                            key: 'getUrlString',
                            value: function () {
                                return this._segment.toString();
                            },
                        },
                        {
                            key: 'getParentView',
                            value: function () {
                                return this._parent;
                            },
                        },
                        {
                            key: '$$',
                            value: function (t) {
                                if ('string' == typeof t) {
                                    var e = this.getRoot();
                                    return e.queryView(function (n) {
                                        return (
                                            (n.config.id === t ||
                                                n.config.localId === t) &&
                                            n.$scope === e.$scope
                                        );
                                    }, 'self');
                                }
                                return t;
                            },
                        },
                        {
                            key: 'on',
                            value: function (t, e, n) {
                                var r = t.attachEvent(e, n);
                                return this._events.push({ obj: t, id: r }), r;
                            },
                        },
                        {
                            key: 'contains',
                            value: function (t) {
                                for (var e in this._subs) {
                                    var n = this._subs[e].view;
                                    if (n === t || n.contains(t)) return !0;
                                }
                                return !1;
                            },
                        },
                        {
                            key: 'getSubView',
                            value: function (t) {
                                var e = this.getSubViewInfo(t);
                                if (e) return e.subview.view;
                            },
                        },
                        {
                            key: 'getSubViewInfo',
                            value: function (t) {
                                var e = this._subs[t || 'default'];
                                return e
                                    ? { subview: e, parent: this }
                                    : '_top' === t
                                    ? ((this._subs[t] = {
                                          url: '',
                                          id: null,
                                          popup: !0,
                                      }),
                                      this.getSubViewInfo(t))
                                    : this._parent
                                    ? this._parent.getSubViewInfo(t)
                                    : null;
                            },
                        },
                        {
                            key: '_detachEvents',
                            value: function () {
                                for (
                                    var t = this._events, e = t.length - 1;
                                    e >= 0;
                                    e--
                                )
                                    t[e].obj.detachEvent(t[e].id);
                            },
                        },
                        {
                            key: '_destroySubs',
                            value: function () {
                                for (var t in this._subs) {
                                    var e = this._subs[t].view;
                                    e && e.destructor();
                                }
                                this._subs = {};
                            },
                        },
                        {
                            key: '_init_url_data',
                            value: function () {
                                var t = this._segment.current();
                                (this._data = {}),
                                    this.webix.extend(this._data, t.params, !0);
                            },
                        },
                        {
                            key: '_getDefaultSub',
                            value: function () {
                                if (this._subs.default)
                                    return this._subs.default;
                                for (var t in this._subs) {
                                    var e = this._subs[t];
                                    if (!e.branch && e.view && '_top' !== t) {
                                        var n = e.view._getDefaultSub();
                                        if (n) return n;
                                    }
                                }
                            },
                        },
                        {
                            key: '_routed_view',
                            value: function () {
                                var t = this.getParentView();
                                if (!t) return !0;
                                var e = t._getDefaultSub();
                                return !(!e && e !== this) && t._routed_view();
                            },
                        },
                    ]),
                    t
                );
            })();
        function b(t) {
            '/' === t[0] && (t = t.substr(1));
            for (var e = t.split('/'), n = [], r = 0; r < e.length; r++) {
                var i = e[r],
                    o = {},
                    u = i.indexOf(':');
                if ((-1 === u && (u = i.indexOf('?')), -1 !== u)) {
                    var a,
                        s = f(i.substr(u + 1).split(/[\:\?\&]/g));
                    try {
                        for (s.s(); !(a = s.n()).done; ) {
                            var c = a.value.split('=');
                            o[c[0]] = decodeURIComponent(c[1]);
                        }
                    } catch (t) {
                        s.e(t);
                    } finally {
                        s.f();
                    }
                }
                n[r] = {
                    page: u > -1 ? i.substr(0, u) : i,
                    params: o,
                    isNew: !0,
                };
            }
            return n;
        }
        function g(t) {
            var e,
                n = [],
                r = f(t);
            try {
                for (r.s(); !(e = r.n()).done; ) {
                    var i = e.value;
                    n.push('/' + i.page);
                    var o = w(i.params);
                    o && n.push('?' + o);
                }
            } catch (t) {
                r.e(t);
            } finally {
                r.f();
            }
            return n.join('');
        }
        function w(t) {
            var e = [];
            for (var n in t)
                e.length && e.push('&'),
                    e.push(n + '=' + encodeURIComponent(t[n]));
            return e.join('');
        }
        var m = (function () {
                function t(e, n) {
                    v(this, t),
                        (this._next = 1),
                        (this.route =
                            'string' == typeof e ? { url: b(e), path: e } : e),
                        (this.index = n);
                }
                return (
                    p(t, [
                        {
                            key: 'current',
                            value: function () {
                                return this.route.url[this.index];
                            },
                        },
                        {
                            key: 'next',
                            value: function () {
                                return this.route.url[this.index + this._next];
                            },
                        },
                        {
                            key: 'suburl',
                            value: function () {
                                return this.route.url.slice(this.index);
                            },
                        },
                        {
                            key: 'shift',
                            value: function () {
                                return new t(
                                    this.route,
                                    this.index + this._next
                                );
                            },
                        },
                        {
                            key: 'refresh',
                            value: function () {
                                for (
                                    var t = this.route.url, e = this.index + 1;
                                    e < t.length;
                                    e++
                                )
                                    t[e].isNew = !0;
                            },
                        },
                        {
                            key: 'toString',
                            value: function () {
                                var t = g(this.suburl());
                                return t ? t.substr(1) : '';
                            },
                        },
                        {
                            key: '_join',
                            value: function (t, e) {
                                var n = this.route.url;
                                if (null === t) return n;
                                var r = this.route.url;
                                if (
                                    ((n = r.slice(
                                        0,
                                        this.index + (e ? this._next : 0)
                                    )),
                                    t)
                                ) {
                                    n = n.concat(b(t));
                                    for (var i = 0; i < n.length; i++)
                                        r[i] && (n[i].view = r[i].view),
                                            r[i] &&
                                                n[i].page === r[i].page &&
                                                (n[i].isNew = !1);
                                }
                                return n;
                            },
                        },
                        {
                            key: 'append',
                            value: function (t) {
                                var e = this._join(t, !0);
                                return (
                                    (this.route.path = g(e)),
                                    (this.route.url = e),
                                    this.route.path
                                );
                            },
                        },
                        {
                            key: 'show',
                            value: function (t, e, n) {
                                var r = this,
                                    i = this._join(t, n);
                                return new Promise(function (t, n) {
                                    var o = g(i),
                                        u = {
                                            url: i,
                                            redirect: o,
                                            confirm: Promise.resolve(),
                                        },
                                        a = e ? e.app : null;
                                    if (
                                        a &&
                                        !a.callEvent('app:guard', [
                                            u.redirect,
                                            e,
                                            u,
                                        ])
                                    )
                                        return void n(new y());
                                    u.confirm
                                        .catch(function (t) {
                                            return n(t);
                                        })
                                        .then(function () {
                                            if (null !== u.redirect) {
                                                if (u.redirect !== o)
                                                    return (
                                                        a.show(u.redirect),
                                                        void n(new y())
                                                    );
                                                (r.route.path = o),
                                                    (r.route.url = i),
                                                    t();
                                            } else n(new y());
                                        });
                                });
                            },
                        },
                        {
                            key: 'size',
                            value: function (t) {
                                this._next = t;
                            },
                        },
                        {
                            key: 'split',
                            value: function () {
                                var e = {
                                    url: this.route.url.slice(this.index + 1),
                                    path: '',
                                };
                                return (
                                    e.url.length && (e.path = g(e.url)),
                                    new t(e, 0)
                                );
                            },
                        },
                        {
                            key: 'update',
                            value: function (t, e, n) {
                                var r = this.route.url[this.index + (n || 0)];
                                if (!r)
                                    return (
                                        this.route.url.push({
                                            page: '',
                                            params: {},
                                        }),
                                        this.update(t, e, n)
                                    );
                                '' === t ? (r.page = e) : (r.params[t] = e),
                                    (this.route.path = g(this.route.url));
                            },
                        },
                    ]),
                    t
                );
            })(),
            _ = (function (t) {
                o(n, d);
                var e = a(n);
                function n(t, r) {
                    var i;
                    return (
                        v(this, n),
                        ((i = e.call(this, t.webix)).app = t),
                        (i._children = []),
                        i
                    );
                }
                return (
                    p(n, [
                        {
                            key: 'ui',
                            value: function (t, e) {
                                var n = (e = e || {}).container || t.container,
                                    i = this.app.createView(t);
                                return (
                                    this._children.push(i),
                                    i.render(n, this._segment, this),
                                    'object' !== r(t) || t instanceof d
                                        ? i
                                        : i.getRoot()
                                );
                            },
                        },
                        {
                            key: 'show',
                            value: function (t, e) {
                                if (((e = e || {}), 'object' === r(t))) {
                                    for (var n in t) this.setParam(n, t[n]);
                                    t = null;
                                } else {
                                    if ('/' === t.substr(0, 1))
                                        return this.app.show(t);
                                    if (
                                        (0 === t.indexOf('./') &&
                                            (t = t.substr(2)),
                                        0 === t.indexOf('../'))
                                    ) {
                                        var i = this.getParentView();
                                        return i
                                            ? i.show(t.substr(3), e)
                                            : this.app.show('/' + t.substr(3));
                                    }
                                    var o = this.getSubViewInfo(e.target);
                                    if (o) {
                                        if (o.parent !== this)
                                            return o.parent.show(t, e);
                                        if (e.target && 'default' !== e.target)
                                            return this._renderFrameLock(
                                                e.target,
                                                o.subview,
                                                t
                                            );
                                    } else if (t) return this.app.show('/' + t);
                                }
                                return this._show(this._segment, t, this);
                            },
                        },
                        {
                            key: '_show',
                            value: function (t, e, n) {
                                var r = this;
                                return t
                                    .show(e, n, !0)
                                    .then(function () {
                                        return (
                                            r._init_url_data(), r._urlChange()
                                        );
                                    })
                                    .then(function () {
                                        t.route.linkRouter &&
                                            (r.app
                                                .getRouter()
                                                .set(t.route.path, {
                                                    silent: !0,
                                                }),
                                            r.app.callEvent('app:route', [
                                                t.route.path,
                                            ]));
                                    });
                            },
                        },
                        { key: 'init', value: function (t, e) {} },
                        { key: 'ready', value: function (t, e) {} },
                        {
                            key: 'config',
                            value: function () {
                                this.app.webix.message(
                                    'View:Config is not implemented'
                                );
                            },
                        },
                        { key: 'urlChange', value: function (t, e) {} },
                        { key: 'destroy', value: function () {} },
                        {
                            key: 'destructor',
                            value: function () {
                                this.destroy(),
                                    this._destroyKids(),
                                    this._root.destructor(),
                                    i(c(n.prototype), 'destructor', this).call(
                                        this
                                    );
                            },
                        },
                        {
                            key: 'use',
                            value: function (t, e) {
                                t(this.app, this, e);
                            },
                        },
                        {
                            key: 'refresh',
                            value: function () {
                                this.getUrl();
                                return (
                                    this.destroy(),
                                    this._destroyKids(),
                                    this._destroySubs(),
                                    this._detachEvents(),
                                    this._container.tagName &&
                                        this._root.destructor(),
                                    this._segment.refresh(),
                                    this._render(this._segment)
                                );
                            },
                        },
                        {
                            key: 'render',
                            value: function (t, e, n) {
                                var r = this;
                                'string' == typeof e && (e = new m(e, 0)),
                                    (this._segment = e),
                                    (this._parent = n),
                                    this._init_url_data();
                                var i =
                                    'string' == typeof (t = t || document.body)
                                        ? this.webix.toNode(t)
                                        : t;
                                return this._container !== i
                                    ? ((this._container = i), this._render(e))
                                    : this._urlChange().then(function () {
                                          return r.getRoot();
                                      });
                            },
                        },
                        {
                            key: '_render',
                            value: function (t) {
                                var e = this,
                                    n = this.config();
                                return n.then
                                    ? n.then(function (n) {
                                          return e._render_final(n, t);
                                      })
                                    : this._render_final(n, t);
                            },
                        },
                        {
                            key: '_render_final',
                            value: function (t, e) {
                                var n,
                                    r = this,
                                    i = null,
                                    o = null,
                                    u = !1;
                                if (
                                    (this._container.tagName
                                        ? (o = this._container)
                                        : (i = this._container).popup
                                        ? ((o = document.body), (u = !0))
                                        : (o = this.webix.$$(i.id)),
                                    !this.app || !o)
                                )
                                    return Promise.reject(null);
                                var a = this._segment.current(),
                                    s = { ui: {} };
                                this.app.copyConfig(t, s.ui, this._subs),
                                    this.app.callEvent('app:render', [
                                        this,
                                        e,
                                        s,
                                    ]),
                                    (s.ui.$scope = this),
                                    !i &&
                                        a.isNew &&
                                        a.view &&
                                        a.view.destructor();
                                try {
                                    if (i && !u) {
                                        var c = o,
                                            f = c.getParentView();
                                        f &&
                                            'multiview' === f.name &&
                                            !s.ui.id &&
                                            (s.ui.id = c.config.id);
                                    }
                                    this._root = this.app.webix.ui(s.ui, o);
                                    var l = this._root;
                                    u &&
                                        l.setPosition &&
                                        !l.isVisible() &&
                                        l.show(),
                                        i &&
                                            (i.view &&
                                                i.view !== this &&
                                                i.view !== this.app &&
                                                i.view.destructor(),
                                            (i.id = this._root.config.id),
                                            this.getParentView() ||
                                            !this.app.app
                                                ? (i.view = this)
                                                : (i.view = this.app)),
                                        a.isNew &&
                                            ((a.view = this), (a.isNew = !1)),
                                        (n = Promise.resolve(
                                            this._init(this._root, e)
                                        ).then(function () {
                                            return r
                                                ._urlChange()
                                                .then(function () {
                                                    return (
                                                        (r._initUrl = null),
                                                        r.ready(
                                                            r._root,
                                                            e.suburl()
                                                        )
                                                    );
                                                });
                                        }));
                                } catch (t) {
                                    n = Promise.reject(t);
                                }
                                return n.catch(function (t) {
                                    return r._initError(r, t);
                                });
                            },
                        },
                        {
                            key: '_init',
                            value: function (t, e) {
                                return this.init(t, e.suburl());
                            },
                        },
                        {
                            key: '_urlChange',
                            value: function () {
                                var t = this;
                                this.app.callEvent('app:urlchange', [
                                    this,
                                    this._segment,
                                ]);
                                var e = [];
                                for (var n in this._subs) {
                                    var r = this._subs[n],
                                        i = this._renderFrameLock(n, r, null);
                                    i && e.push(i);
                                }
                                return Promise.all(e).then(function () {
                                    return t.urlChange(
                                        t._root,
                                        t._segment.suburl()
                                    );
                                });
                            },
                        },
                        {
                            key: '_renderFrameLock',
                            value: function (t, e, n) {
                                if (!e.lock) {
                                    var r = this._renderFrame(t, e, n);
                                    r &&
                                        (e.lock = r.then(
                                            function () {
                                                return (e.lock = null);
                                            },
                                            function () {
                                                return (e.lock = null);
                                            }
                                        ));
                                }
                                return e.lock;
                            },
                        },
                        {
                            key: '_renderFrame',
                            value: function (t, e, n) {
                                var r = this;
                                if ('default' === t) {
                                    if (this._segment.next())
                                        return this._createSubView(
                                            e,
                                            this._segment.shift()
                                        );
                                    e.view &&
                                        e.popup &&
                                        (e.view.destructor(), (e.view = null));
                                }
                                if ((null !== n && (e.url = n), e.route)) {
                                    if (null !== n)
                                        return e.route
                                            .show(n, e.view)
                                            .then(function () {
                                                return r._createSubView(
                                                    e,
                                                    e.route
                                                );
                                            });
                                    if (e.branch) return;
                                }
                                var i = e.view;
                                if (!i && e.url) {
                                    if ('string' == typeof e.url)
                                        return (
                                            (e.route = new m(e.url, 0)),
                                            this._createSubView(e, e.route)
                                        );
                                    'function' != typeof e.url ||
                                        i instanceof e.url ||
                                        (i = new e.url(this.app, '')),
                                        i || (i = e.url);
                                }
                                if (i)
                                    return i.render(
                                        e,
                                        e.route || this._segment,
                                        this
                                    );
                            },
                        },
                        {
                            key: '_initError',
                            value: function (t, e) {
                                return (
                                    this.app &&
                                        this.app.error('app:error:initview', [
                                            e,
                                            t,
                                        ]),
                                    !0
                                );
                            },
                        },
                        {
                            key: '_createSubView',
                            value: function (t, e) {
                                var n = this;
                                return this.app
                                    .createFromURL(e.current())
                                    .then(function (r) {
                                        return r.render(t, e, n);
                                    });
                            },
                        },
                        {
                            key: '_destroyKids',
                            value: function () {
                                for (
                                    var t = this._children, e = t.length - 1;
                                    e >= 0;
                                    e--
                                )
                                    t[e] &&
                                        t[e].destructor &&
                                        t[e].destructor();
                                this._children = [];
                            },
                        },
                    ]),
                    n
                );
            })(),
            x = (function (t) {
                o(n, _);
                var e = a(n);
                function n(t, r) {
                    var i;
                    return v(this, n), ((i = e.call(this, t, r))._ui = r.ui), i;
                }
                return (
                    p(n, [
                        {
                            key: 'config',
                            value: function () {
                                return this._ui;
                            },
                        },
                    ]),
                    n
                );
            })(),
            k = (function () {
                function t(e, n, r) {
                    v(this, t), (this.path = ''), (this.app = r);
                }
                return (
                    p(t, [
                        {
                            key: 'set',
                            value: function (t, e) {
                                this.path = t;
                                var n = this.app;
                                n.app
                                    .getRouter()
                                    .set(n._segment.append(this.path), {
                                        silent: !0,
                                    });
                            },
                        },
                        {
                            key: 'get',
                            value: function () {
                                return this.path;
                            },
                        },
                    ]),
                    t
                );
            })(),
            S = !0,
            O = (function (t) {
                o(n, d);
                var e = a(n);
                function n(t) {
                    var r;
                    v(this, n);
                    var i = (t || {}).webix || window.webix;
                    return (
                        ((r = e.call(this, i)).config = r.webix.extend(
                            { name: 'App', version: '1.0', start: '/home' },
                            t,
                            !0
                        )),
                        (r.app = r.config.app),
                        (r.ready = Promise.resolve()),
                        (r._services = {}),
                        r.webix.extend(s(r), r.webix.EventSystem),
                        r
                    );
                }
                return (
                    p(n, [
                        {
                            key: 'getUrl',
                            value: function () {
                                return this._subSegment.suburl();
                            },
                        },
                        {
                            key: 'getUrlString',
                            value: function () {
                                return this._subSegment.toString();
                            },
                        },
                        {
                            key: 'getService',
                            value: function (t) {
                                var e = this._services[t];
                                return (
                                    'function' == typeof e &&
                                        (e = this._services[t] = e(this)),
                                    e
                                );
                            },
                        },
                        {
                            key: 'setService',
                            value: function (t, e) {
                                this._services[t] = e;
                            },
                        },
                        {
                            key: 'destructor',
                            value: function () {
                                this.getSubView().destructor(),
                                    i(c(n.prototype), 'destructor', this).call(
                                        this
                                    );
                            },
                        },
                        {
                            key: 'copyConfig',
                            value: function (t, e, n) {
                                if (
                                    ((t instanceof d ||
                                        ('function' == typeof t &&
                                            t.prototype instanceof d)) &&
                                        (t = { $subview: t }),
                                    void 0 !== t.$subview)
                                )
                                    return this.addSubView(t, e, n);
                                for (var i in ((e =
                                    e || (t instanceof Array ? [] : {})),
                                t)) {
                                    var o = t[i];
                                    if (
                                        ('function' == typeof o &&
                                            o.prototype instanceof d &&
                                            (o = { $subview: o }),
                                        !o ||
                                            'object' !== r(o) ||
                                            o instanceof
                                                this.webix.DataCollection ||
                                            o instanceof RegExp)
                                    )
                                        e[i] = o;
                                    else if (o instanceof Date)
                                        e[i] = new Date(o);
                                    else {
                                        var u = this.copyConfig(
                                            o,
                                            o instanceof Array ? [] : {},
                                            n
                                        );
                                        null !== u && (e[i] = u);
                                    }
                                }
                                return e;
                            },
                        },
                        {
                            key: 'getRouter',
                            value: function () {
                                return this.$router;
                            },
                        },
                        {
                            key: 'clickHandler',
                            value: function (t, e) {
                                if (
                                    t &&
                                    (e = e || t.target || t.srcElement) &&
                                    e.getAttribute
                                ) {
                                    var n = e.getAttribute('trigger');
                                    if (n)
                                        return (
                                            this._forView(e, function (t) {
                                                return t.app.trigger(n);
                                            }),
                                            (t.cancelBubble = !0),
                                            t.preventDefault()
                                        );
                                    var r = e.getAttribute('route');
                                    if (r)
                                        return (
                                            this._forView(e, function (t) {
                                                return t.show(r);
                                            }),
                                            (t.cancelBubble = !0),
                                            t.preventDefault()
                                        );
                                }
                                var i = e.parentNode;
                                i && this.clickHandler(t, i);
                            },
                        },
                        {
                            key: 'getRoot',
                            value: function () {
                                return this.getSubView().getRoot();
                            },
                        },
                        {
                            key: 'refresh',
                            value: function () {
                                var t = this;
                                return this._subSegment
                                    ? this.getSubView()
                                          .refresh()
                                          .then(function (e) {
                                              return (
                                                  t.callEvent('app:route', [
                                                      t.getUrl(),
                                                  ]),
                                                  e
                                              );
                                          })
                                    : Promise.resolve(null);
                            },
                        },
                        {
                            key: 'loadView',
                            value: function (t) {
                                var e = this,
                                    n = this.config.views,
                                    r = null;
                                if ('' === t)
                                    return Promise.resolve(
                                        this._loadError(
                                            '',
                                            new Error(
                                                'Webix Jet: Empty url segment'
                                            )
                                        )
                                    );
                                try {
                                    n &&
                                        'string' ==
                                            typeof (r =
                                                'function' == typeof n
                                                    ? n(t)
                                                    : n[t]) &&
                                        ((t = r), (r = null)),
                                        r ||
                                            (r =
                                                '_blank' === t
                                                    ? {}
                                                    : this._loadViewDynamic(t));
                                } catch (e) {
                                    r = this._loadError(t, e);
                                }
                                return (
                                    r.then || (r = Promise.resolve(r)),
                                    (r = r
                                        .then(function (t) {
                                            return t.__esModule ? t.default : t;
                                        })
                                        .catch(function (n) {
                                            return e._loadError(t, n);
                                        }))
                                );
                            },
                        },
                        {
                            key: '_forView',
                            value: function (t, e) {
                                var n = this.webix.$$(t);
                                n && e(n.$scope);
                            },
                        },
                        {
                            key: '_loadViewDynamic',
                            value: function (t) {
                                return null;
                            },
                        },
                        {
                            key: 'createFromURL',
                            value: function (t) {
                                var e = this;
                                return t.isNew || !t.view
                                    ? this.loadView(t.page).then(function (t) {
                                          return e.createView(t, name);
                                      })
                                    : Promise.resolve(t.view);
                            },
                        },
                        {
                            key: 'createView',
                            value: function (t, e) {
                                if ('function' == typeof t) {
                                    if (t.prototype instanceof n)
                                        return new t({
                                            app: this,
                                            name: e,
                                            router: k,
                                        });
                                    if (t.prototype instanceof d)
                                        return new t(this, { name: e });
                                    t = t(this);
                                }
                                return t instanceof d
                                    ? t
                                    : new x(this, { name: e, ui: t });
                            },
                        },
                        {
                            key: 'show',
                            value: function (t) {
                                return this.render(
                                    this._container,
                                    t || this.config.start
                                );
                            },
                        },
                        {
                            key: 'trigger',
                            value: function (t) {
                                for (
                                    var e = arguments.length,
                                        n = new Array(e > 1 ? e - 1 : 0),
                                        r = 1;
                                    r < e;
                                    r++
                                )
                                    n[r - 1] = arguments[r];
                                this.apply(t, n);
                            },
                        },
                        {
                            key: 'apply',
                            value: function (t, e) {
                                this.callEvent(t, e);
                            },
                        },
                        {
                            key: 'action',
                            value: function (t) {
                                return this.webix.bind(function () {
                                    for (
                                        var e = arguments.length,
                                            n = new Array(e),
                                            r = 0;
                                        r < e;
                                        r++
                                    )
                                        n[r] = arguments[r];
                                    this.apply(t, n);
                                }, this);
                            },
                        },
                        {
                            key: 'on',
                            value: function (t, e) {
                                this.attachEvent(t, e);
                            },
                        },
                        {
                            key: 'use',
                            value: function (t, e) {
                                t(this, null, e);
                            },
                        },
                        {
                            key: 'error',
                            value: function (t, e) {
                                if (
                                    (this.callEvent(t, e),
                                    this.callEvent('app:error', e),
                                    this.config.debug)
                                )
                                    for (var n = 0; n < e.length; n++)
                                        if (
                                            (console.error(e[n]),
                                            e[n] instanceof Error)
                                        ) {
                                            var r = e[n].message;
                                            0 ===
                                            r.indexOf('Module build failed')
                                                ? ((r = r.replace(
                                                      /\x1b\[[0-9;]*m/g,
                                                      ''
                                                  )),
                                                  (document.body.innerHTML =
                                                      "<pre style='font-size:16px; background-color: #ec6873; color: #000; padding:10px;'>".concat(
                                                          r,
                                                          '</pre>'
                                                      )))
                                                : ((r +=
                                                      '<br><br>Check console for more details'),
                                                  this.webix.message({
                                                      type: 'error',
                                                      text: r,
                                                      expire: -1,
                                                  }));
                                        }
                            },
                        },
                        {
                            key: 'render',
                            value: function (t, e, n) {
                                var r = this;
                                this._container =
                                    'string' == typeof t
                                        ? this.webix.toNode(t)
                                        : t || document.body;
                                var i = null;
                                !this.$router
                                    ? (S &&
                                          'tagName' in this._container &&
                                          (this.webix.event(
                                              document.body,
                                              'click',
                                              function (t) {
                                                  return r.clickHandler(t);
                                              }
                                          ),
                                          (S = !1)),
                                      'string' == typeof e && (e = new m(e, 0)),
                                      (this._subSegment = this._first_start(e)),
                                      (this._subSegment.route.linkRouter = !0))
                                    : (i =
                                          'string' == typeof e
                                              ? e
                                              : this.app
                                              ? e.split().route.path ||
                                                this.config.start
                                              : e.toString());
                                var o = this.getSubView(),
                                    u = this._subSegment,
                                    a = u
                                        .show(i, o)
                                        .then(function () {
                                            return r.createFromURL(u.current());
                                        })
                                        .then(function (e) {
                                            return e.render(t, u);
                                        })
                                        .then(function (t) {
                                            return (
                                                r.$router.set(u.route.path, {
                                                    silent: !0,
                                                }),
                                                r.callEvent('app:route', [
                                                    r.getUrl(),
                                                ]),
                                                t
                                            );
                                        });
                                return (
                                    (this.ready = this.ready.then(function () {
                                        return a;
                                    })),
                                    a
                                );
                            },
                        },
                        {
                            key: 'getSubView',
                            value: function () {
                                if (this._subSegment) {
                                    var t = this._subSegment.current().view;
                                    if (t) return t;
                                }
                                return new _(this, {});
                            },
                        },
                        {
                            key: '_first_start',
                            value: function (t) {
                                var e = this;
                                this._segment = t;
                                if (
                                    ((this.$router = new this.config.router(
                                        function (t) {
                                            return setTimeout(function () {
                                                e.show(t).catch(function (t) {
                                                    if (!(t instanceof y))
                                                        throw t;
                                                });
                                            }, 1);
                                        },
                                        this.config,
                                        this
                                    )),
                                    this._container === document.body &&
                                        !1 !== this.config.animation)
                                ) {
                                    var n = this._container;
                                    this.webix.html.addCss(n, 'webixappstart'),
                                        setTimeout(function () {
                                            e.webix.html.removeCss(
                                                n,
                                                'webixappstart'
                                            ),
                                                e.webix.html.addCss(
                                                    n,
                                                    'webixapp'
                                                );
                                        }, 10);
                                }
                                if (t)
                                    this.app &&
                                        ((t.current().view = this),
                                        t.next()
                                            ? (t.refresh(), (t = t.split()))
                                            : (t = new m(
                                                  this.config.start,
                                                  0
                                              )));
                                else {
                                    var r = this.$router.get();
                                    r ||
                                        ((r = this.config.start),
                                        this.$router.set(r, { silent: !0 })),
                                        (t = new m(r, 0));
                                }
                                return t;
                            },
                        },
                        {
                            key: '_loadError',
                            value: function (t, e) {
                                return (
                                    this.error('app:error:resolve', [e, t]),
                                    { template: ' ' }
                                );
                            },
                        },
                        {
                            key: 'addSubView',
                            value: function (t, e, n) {
                                var r = !0 !== t.$subview ? t.$subview : null,
                                    i =
                                        t.name ||
                                        (r ? this.webix.uid() : 'default');
                                return (
                                    (e.id = t.id || 's' + this.webix.uid()),
                                    (n[i] = {
                                        id: e.id,
                                        url: r,
                                        branch: t.branch,
                                        popup: t.popup,
                                    }).popup
                                        ? null
                                        : e
                                );
                            },
                        },
                    ]),
                    n
                );
            })(),
            j = (function () {
                function t(e, n) {
                    var r = this;
                    v(this, t),
                        (this.config = n || {}),
                        this._detectPrefix(),
                        (this.cb = e),
                        (window.onpopstate = function () {
                            return r.cb(r.get());
                        });
                }
                return (
                    p(t, [
                        {
                            key: 'set',
                            value: function (t, e) {
                                var n = this;
                                if (this.config.routes) {
                                    var r = t.split('?', 2);
                                    for (var i in this.config.routes)
                                        if (this.config.routes[i] === r[0]) {
                                            t =
                                                i +
                                                (r.length > 1
                                                    ? '?' + r[1]
                                                    : '');
                                            break;
                                        }
                                }
                                this.get() !== t &&
                                    window.history.pushState(
                                        null,
                                        null,
                                        this.prefix + this.sufix + t
                                    ),
                                    (e && e.silent) ||
                                        setTimeout(function () {
                                            return n.cb(t);
                                        }, 1);
                            },
                        },
                        {
                            key: 'get',
                            value: function () {
                                var t = this._getRaw()
                                    .replace(this.prefix, '')
                                    .replace(this.sufix, '');
                                if (
                                    ((t = '/' !== t && '#' !== t ? t : ''),
                                    this.config.routes)
                                ) {
                                    var e = t.split('?', 2),
                                        n = this.config.routes[e[0]];
                                    n &&
                                        (t =
                                            n +
                                            (e.length > 1 ? '?' + e[1] : ''));
                                }
                                return t;
                            },
                        },
                        {
                            key: '_detectPrefix',
                            value: function () {
                                var t = this.config.routerPrefix;
                                (this.sufix = '#' + (void 0 === t ? '!' : t)),
                                    (this.prefix = document.location.href.split(
                                        '#',
                                        2
                                    )[0]);
                            },
                        },
                        {
                            key: '_getRaw',
                            value: function () {
                                return document.location.href;
                            },
                        },
                    ]),
                    t
                );
            })(),
            P = !1;
        function $(t) {
            if (!P && t) {
                P = !0;
                var e = window;
                e.Promise || (e.Promise = t.promise);
                var n = t.version.split('.');
                10 * n[0] + 1 * n[1] < 53 &&
                    (t.ui.freeze = function (e) {
                        var n = e();
                        return (
                            n && n.then
                                ? n.then(function (e) {
                                      return (
                                          (t.ui.$freeze = !1), t.ui.resize(), e
                                      );
                                  })
                                : ((t.ui.$freeze = !1), t.ui.resize()),
                            n
                        );
                    });
                var i = t.ui.baselayout.prototype.addView,
                    o = t.ui.baselayout.prototype.removeView,
                    u = {
                        addView: function (t, e) {
                            var n = this;
                            if (
                                !this.$scope ||
                                !this.$scope.webixJet ||
                                t.queryView
                            )
                                return i.apply(this, arguments);
                            var o = (function () {
                                var r = n.$scope,
                                    o = {};
                                (t = r.app.copyConfig(t, {}, o)),
                                    i.apply(n, [t, e]);
                                var u = function (t) {
                                    r._renderFrame(t, o[t], null).then(
                                        function () {
                                            r._subs[t] = o[t];
                                        }
                                    );
                                };
                                for (var a in o) u(a);
                                return { v: t.id };
                            })();
                            return 'object' === r(o) ? o.v : void 0;
                        },
                        removeView: function () {
                            if (
                                (o.apply(this, arguments),
                                this.$scope && this.$scope.webixJet)
                            ) {
                                var e = this.$scope._subs;
                                for (var n in e) {
                                    var r = e[n];
                                    t.$$(r.id) ||
                                        (r.view.destructor(), delete e[n]);
                                }
                            }
                        },
                    };
                t.extend(t.ui.layout.prototype, u, !0),
                    t.extend(t.ui.baselayout.prototype, u, !0),
                    t.protoUI(
                        {
                            name: 'jetapp',
                            $init: function (e) {
                                this.$app = new this.app(e);
                                var n = t.uid().toString();
                                for (var r in ((e.body = { id: n }),
                                this.$ready.push(function () {
                                    this.$app.render({ id: n });
                                }),
                                this.$app)) {
                                    var i = this.$app[r];
                                    'function' != typeof i ||
                                        this[r] ||
                                        (this[r] = i.bind(this.$app));
                                }
                            },
                        },
                        t.ui.proxy
                    );
            }
        }
        var E = (function (t) {
            o(r, O);
            var e = a(r);
            function r(t) {
                var n;
                return (
                    v(this, r),
                    (t.router = t.router || j),
                    $((n = e.call(this, t)).webix),
                    n
                );
            }
            return (
                p(r, [
                    {
                        key: '_loadViewDynamic',
                        value: function (t) {
                            return (t = t.replace(/\./g, '/')), n(8)('./' + t);
                        },
                    },
                ]),
                r
            );
        })();
        function R(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }
        function V(t, e, n) {
            for (var r in t) R(t, r) && e.call(n || t, t[r], r, t);
        }
        function U(t) {
            (t = 'Warning: ' + t),
                'undefined' != typeof console && console.error(t);
            try {
                throw new Error(t);
            } catch (t) {}
        }
        var C = String.prototype.replace,
            T = String.prototype.split,
            A = '||||',
            I = function (t) {
                var e = t % 10;
                return 11 !== t && 1 === e
                    ? 0
                    : 2 <= e && e <= 4 && !(t >= 12 && t <= 14)
                    ? 1
                    : 2;
            },
            L = {
                arabic: function (t) {
                    if (t < 3) return t;
                    var e = t % 100;
                    return e >= 3 && e <= 10 ? 3 : e >= 11 ? 4 : 5;
                },
                bosnian_serbian: I,
                chinese: function () {
                    return 0;
                },
                croatian: I,
                french: function (t) {
                    return t > 1 ? 1 : 0;
                },
                german: function (t) {
                    return 1 !== t ? 1 : 0;
                },
                russian: I,
                lithuanian: function (t) {
                    return t % 10 == 1 && t % 100 != 11
                        ? 0
                        : t % 10 >= 2 &&
                          t % 10 <= 9 &&
                          (t % 100 < 11 || t % 100 > 19)
                        ? 1
                        : 2;
                },
                czech: function (t) {
                    return 1 === t ? 0 : t >= 2 && t <= 4 ? 1 : 2;
                },
                polish: function (t) {
                    if (1 === t) return 0;
                    var e = t % 10;
                    return 2 <= e && e <= 4 && (t % 100 < 10 || t % 100 >= 20)
                        ? 1
                        : 2;
                },
                icelandic: function (t) {
                    return t % 10 != 1 || t % 100 == 11 ? 1 : 0;
                },
                slovenian: function (t) {
                    var e = t % 100;
                    return 1 === e
                        ? 0
                        : 2 === e
                        ? 1
                        : 3 === e || 4 === e
                        ? 2
                        : 3;
                },
            },
            D = {
                arabic: ['ar'],
                bosnian_serbian: [
                    'bs-Latn-BA',
                    'bs-Cyrl-BA',
                    'srl-RS',
                    'sr-RS',
                ],
                chinese: [
                    'id',
                    'id-ID',
                    'ja',
                    'ko',
                    'ko-KR',
                    'lo',
                    'ms',
                    'th',
                    'th-TH',
                    'zh',
                ],
                croatian: ['hr', 'hr-HR'],
                german: [
                    'fa',
                    'da',
                    'de',
                    'en',
                    'es',
                    'fi',
                    'el',
                    'he',
                    'hi-IN',
                    'hu',
                    'hu-HU',
                    'it',
                    'nl',
                    'no',
                    'pt',
                    'sv',
                    'tr',
                ],
                french: ['fr', 'tl', 'pt-br'],
                russian: ['ru', 'ru-RU'],
                lithuanian: ['lt'],
                czech: ['cs', 'cs-CZ', 'sk'],
                polish: ['pl'],
                icelandic: ['is'],
                slovenian: ['sl-SL'],
            };
        function M(t) {
            var e = (function (t) {
                var e = {};
                return (
                    V(t, function (t, n) {
                        V(t, function (t) {
                            e[t] = n;
                        });
                    }),
                    e
                );
            })(D);
            return e[t] || e[T.call(t, /-/, 1)[0]] || e.en;
        }
        function N(t) {
            return t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        }
        var F = /\$/g,
            B = '$$',
            z = /%\{(.*?)\}/g;
        function q(t, e, n, r) {
            if ('string' != typeof t)
                throw new TypeError(
                    'Polyglot.transformPhrase expects argument #1 to be string'
                );
            if (null == e) return t;
            var i = t,
                o = r || z,
                u = 'number' == typeof e ? { smart_count: e } : e;
            if (null != u.smart_count && i) {
                var a = T.call(i, A);
                i = (function (t) {
                    return t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
                })(
                    a[
                        (function (t, e) {
                            return L[M(t)](e);
                        })(n || 'en', u.smart_count)
                    ] || a[0]
                );
            }
            return (i = C.call(i, o, function (t, e) {
                return R(u, e) && null != u[e] ? C.call(u[e], F, B) : t;
            }));
        }
        function K(t) {
            var e = t || {};
            (this.phrases = {}),
                this.extend(e.phrases || {}),
                (this.currentLocale = e.locale || 'en');
            var n = e.allowMissing ? q : null;
            (this.onMissingKey =
                'function' == typeof e.onMissingKey ? e.onMissingKey : n),
                (this.warn = e.warn || U),
                (this.tokenRegex = (function (t) {
                    var e = (t && t.prefix) || '%{',
                        n = (t && t.suffix) || '}';
                    if (e === A || n === A)
                        throw new RangeError(
                            '"' + A + '" token is reserved for pluralization'
                        );
                    return new RegExp(N(e) + '(.*?)' + N(n), 'g');
                })(e.interpolation));
        }
        (K.prototype.locale = function (t) {
            return t && (this.currentLocale = t), this.currentLocale;
        }),
            (K.prototype.extend = function (t, e) {
                V(
                    t,
                    function (t, n) {
                        var i = e ? e + '.' + n : n;
                        'object' === r(t)
                            ? this.extend(t, i)
                            : (this.phrases[i] = t);
                    },
                    this
                );
            }),
            (K.prototype.unset = function (t, e) {
                'string' == typeof t
                    ? delete this.phrases[t]
                    : V(
                          t,
                          function (t, n) {
                              var i = e ? e + '.' + n : n;
                              'object' === r(t)
                                  ? this.unset(t, i)
                                  : delete this.phrases[i];
                          },
                          this
                      );
            }),
            (K.prototype.clear = function () {
                this.phrases = {};
            }),
            (K.prototype.replace = function (t) {
                this.clear(), this.extend(t);
            }),
            (K.prototype.t = function (t, e) {
                var n,
                    r,
                    i = null == e ? {} : e;
                if ('string' == typeof this.phrases[t]) n = this.phrases[t];
                else if ('string' == typeof i._) n = i._;
                else if (this.onMissingKey) {
                    r = (0, this.onMissingKey)(
                        t,
                        i,
                        this.currentLocale,
                        this.tokenRegex
                    );
                } else
                    this.warn('Missing translation for key: "' + t + '"'),
                        (r = t);
                return (
                    'string' == typeof n &&
                        (r = q(n, i, this.currentLocale, this.tokenRegex)),
                    r
                );
            }),
            (K.prototype.has = function (t) {
                return R(this.phrases, t);
            }),
            (K.transformPhrase = function (t, e, n) {
                return q(t, e, n);
            });
        var H = K;
        function J(t, e, n) {
            e.urls
                ? (n = e.urls[n] || n)
                : e.param &&
                  (n = (function (t, e, n) {
                      return (
                          e in t
                              ? Object.defineProperty(t, e, {
                                    value: n,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0,
                                })
                              : (t[e] = n),
                          t
                      );
                  })({}, e.param, n)),
                t.show(n);
        }
        var Q = { good: 'check', error: 'warning', saving: 'refresh fa-spin' },
            W = { good: 'Ok', error: 'Error', saving: 'Connecting...' };
        function X(t, e, n) {
            for (var r = 0; r < n.length; r++)
                t[n[r]] = e[r + 1] ? e[r + 1].page : '';
        }
        var Y = window.webix;
        Y && $(Y);
        var G = {
                UnloadGuard: function (t, e, n) {
                    e.on(t, 'app:guard', function (t, r, i) {
                        if (r === e || r.contains(e)) {
                            var o = n();
                            i.confirm =
                                !1 === o
                                    ? Promise.reject(new y())
                                    : i.confirm.then(function () {
                                          return o;
                                      });
                        }
                    });
                },
                Locale: function (t, e, r) {
                    var i = (r = r || {}).storage,
                        o = i ? i.get('lang') || 'en' : r.lang || 'en';
                    function u(e, n, u) {
                        n.__esModule && (n = n.default);
                        var a = { phrases: n };
                        r.polyglot && t.webix.extend(a, r.polyglot);
                        var c = (s.polyglot = new H(a));
                        if (
                            (c.locale(e),
                            (s._ = t.webix.bind(c.t, c)),
                            (o = e),
                            i && i.put('lang', o),
                            r.webix)
                        ) {
                            var f = r.webix[e];
                            f && t.webix.i18n.setLocale(f);
                        }
                        return u ? Promise.resolve() : t.refresh();
                    }
                    function a(t, e) {
                        if (!1 !== r.path) {
                            var i = (r.path ? r.path + '/' : '') + t;
                            u(t, n(7)('./' + i), e);
                        }
                    }
                    var s = {
                        getLang: function () {
                            return o;
                        },
                        setLang: a,
                        setLangData: u,
                        _: null,
                        polyglot: null,
                    };
                    t.setService('locale', s), a(o, !0);
                },
                Menu: function (t, e, n) {
                    var r = e.getSubViewInfo().parent,
                        i = e.$$(n.id || n),
                        o = !1;
                    i.attachEvent('onchange', function () {
                        o || J(r, n, this.getValue());
                    }),
                        i.attachEvent('onafterselect', function () {
                            if (!o) {
                                var t = null;
                                i.setValue
                                    ? (t = this.getValue())
                                    : i.getSelectedId &&
                                      (t = i.getSelectedId()),
                                    J(r, n, t);
                            }
                        }),
                        e.on(t, 'app:route', function () {
                            var t = '';
                            if (n.param) t = e.getParam(n.param, !0);
                            else {
                                var u = r.getUrl()[1];
                                u && (t = u.page);
                            }
                            t &&
                                ((o = !0),
                                i.setValue && i.getValue() !== t
                                    ? i.setValue(t)
                                    : i.select &&
                                      i.exists(t) &&
                                      i.getSelectedId() !== t &&
                                      i.select(t),
                                (o = !1));
                        });
                },
                Theme: function (t, e, n) {
                    var r = (n = n || {}).storage,
                        i = r
                            ? r.get('theme') || 'flat-default'
                            : n.theme || 'flat-default',
                        o = {
                            getTheme: function () {
                                return i;
                            },
                            setTheme: function (e, n) {
                                for (
                                    var o = e.split('-'),
                                        u =
                                            document.getElementsByTagName(
                                                'link'
                                            ),
                                        a = 0;
                                    a < u.length;
                                    a++
                                ) {
                                    var s = u[a].getAttribute('title');
                                    s &&
                                        (s === e || s === o[0]
                                            ? (u[a].disabled = !1)
                                            : (u[a].disabled = !0));
                                }
                                t.webix.skin.set(o[0]),
                                    t.webix.html.removeCss(
                                        document.body,
                                        'theme-' + i
                                    ),
                                    t.webix.html.addCss(
                                        document.body,
                                        'theme-' + e
                                    ),
                                    (i = e),
                                    r && r.put('theme', e),
                                    n || t.refresh();
                            },
                        };
                    t.setService('theme', o), o.setTheme(i, !0);
                },
                User: function (t, e, n) {
                    var r = (n = n || {}).login || '/login',
                        i = n.logout || '/logout',
                        o = n.afterLogin || t.config.start,
                        u = n.afterLogout || '/login',
                        a = n.ping || 3e5,
                        s = n.model,
                        c = n.user,
                        f = {
                            getUser: function () {
                                return c;
                            },
                            getStatus: function (t) {
                                return t
                                    ? s
                                          .status()
                                          .catch(function () {
                                              return null;
                                          })
                                          .then(function (t) {
                                              c = t;
                                          })
                                    : null !== c;
                            },
                            login: function (e, n) {
                                return s.login(e, n).then(function (e) {
                                    if (((c = e), !e))
                                        throw new Error('Access denied');
                                    t.callEvent('app:user:login', [c]),
                                        t.show(o);
                                });
                            },
                            logout: function () {
                                return (
                                    (c = null),
                                    s.logout().then(function (e) {
                                        return (
                                            t.callEvent('app:user:logout', []),
                                            e
                                        );
                                    })
                                );
                            },
                        };
                    function l(t, e) {
                        t === i
                            ? (f.logout(), (e.redirect = u))
                            : t === r || f.getStatus() || (e.redirect = r);
                    }
                    t.setService('user', f),
                        t.attachEvent('app:guard', function (t, e, r) {
                            return (
                                !(!n.public || !n.public(t)) ||
                                (void 0 === c &&
                                    (r.confirm = f
                                        .getStatus(!0)
                                        .then(function () {
                                            return l(t, r);
                                        })),
                                l(t, r))
                            );
                        }),
                        a &&
                            setInterval(function () {
                                return f.getStatus(!0);
                            }, a);
                },
                Status: function (t, e, n) {
                    var r = 'good',
                        i = 0,
                        o = !1,
                        u = n.expire;
                    u || !1 === u || (u = 2e3);
                    var a = n.texts || W,
                        s = n.icons || Q;
                    function c(t) {
                        var i = e.$$(n.target);
                        i &&
                            (t ||
                                (t =
                                    "<div class='status_" +
                                    r +
                                    "'><span class='webix_icon fa-" +
                                    s[r] +
                                    "'></span> " +
                                    a[r] +
                                    '</div>'),
                            i.setHTML(t));
                    }
                    function f() {
                        i--, v('good');
                    }
                    function l(t) {
                        i--, v('error', t);
                    }
                    function h(t) {
                        i++, v('saving'), t && t.then && t.then(f, l);
                    }
                    function p() {
                        0 === i && c(' ');
                    }
                    function v(e, n) {
                        i < 0 && (i = 0),
                            'saving' === e
                                ? ((r = 'saving'), c())
                                : ((o = 'error' === e),
                                  0 === i &&
                                      ((r = o ? 'error' : 'good'),
                                      o
                                          ? t.error('app:error:server', [
                                                n.responseText || n,
                                            ])
                                          : u && setTimeout(p, u),
                                      c()));
                    }
                    function y(n) {
                        var r = t.webix.dp(n);
                        r &&
                            (e.on(r, 'onAfterDataSend', h),
                            e.on(r, 'onAfterSaveError', function (t, e, n) {
                                return l(n);
                            }),
                            e.on(r, 'onAfterSave', f));
                    }
                    'string' == typeof n && (n = { target: n }),
                        t.setService('status', {
                            getStatus: function () {
                                return r;
                            },
                            setStatus: v,
                            track: y,
                        }),
                        n.remote && e.on(t.webix, 'onRemoteCall', h),
                        n.ajax &&
                            e.on(
                                t.webix,
                                'onBeforeAjax',
                                function (t, e, n, r, i, o, u) {
                                    h(u);
                                }
                            ),
                        n.data && y(n.data);
                },
                UrlParam: function (t, e, n) {
                    var r = n.route || n,
                        i = {};
                    e.on(t, 'app:urlchange', function (t, n) {
                        e === t && (X(i, n.suburl(), r), n.size(r.length + 1));
                    });
                    var o = e.setParam,
                        u = e.getParam;
                    (e.setParam = function (t, n, u) {
                        var a = r.indexOf(t);
                        return a >= 0
                            ? ((i[t] = n),
                              this._segment.update('', n, a + 1),
                              u ? e.show(null) : void 0)
                            : o.call(this, t, n, u);
                    }),
                        (e.getParam = function (t, e) {
                            var n = i[t];
                            return void 0 !== n ? n : u.call(this, t, e);
                        }),
                        X(i, e.getUrl(), r);
                },
            },
            Z = window;
        Z.Promise || (Z.Promise = Z.webix.promise);
    },
    function (t, e, n) {
        'use strict';
        n.r(e);
        var r = n(0),
            i = [
                {
                    id: 1,
                    title: 'Столица Эквадора - это:',
                    options: [
                        'Великобритания',
                        'Малайзия',
                        'Константинополь',
                        'Гаага',
                    ],
                },
                {
                    id: 2,
                    title: 'Президент Франции в 1989 году - это',
                    options: ['Макрон', 'Оби Ван', 'Ширак', 'Поль Монро'],
                },
                {
                    id: 3,
                    title: 'Площадь Африки составляет:',
                    options: ['1', '2', '3', '4'],
                },
                {
                    id: 4,
                    title: 'Режиссер фильма "Долгая дорога" - ',
                    options: ['Мичкин', 'Фрунзе', 'Калкин', 'Франчайзи'],
                },
                {
                    id: 5,
                    title: 'Как называют сотрудников правопорядка в Греции?',
                    options: ['Милиционер', 'Полицейский', 'Охранник'],
                },
            ];
        function o(t) {
            '@babel/helpers - typeof';
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
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    'value' in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r);
            }
        }
        function a(t, e) {
            return (a =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        function s(t) {
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
                var n,
                    r = c(t);
                if (e) {
                    var i = c(this).constructor;
                    n = Reflect.construct(r, arguments, i);
                } else n = r.apply(this, arguments);
                return (function (t, e) {
                    if (e && ('object' === o(e) || 'function' == typeof e))
                        return e;
                    return (function (t) {
                        if (void 0 === t)
                            throw new ReferenceError(
                                "this hasn't been initialised - super() hasn't been called"
                            );
                        return t;
                    })(t);
                })(this, n);
            };
        }
        function c(t) {
            return (c = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        n.d(e, 'default', function () {
            return f;
        });
        var f = (function (t) {
            !(function (t, e) {
                if ('function' != typeof e && null !== e)
                    throw new TypeError(
                        'Super expression must either be null or a function'
                    );
                (t.prototype = Object.create(e && e.prototype, {
                    constructor: { value: t, writable: !0, configurable: !0 },
                })),
                    e && a(t, e);
            })(n, r['c']);
            var e = s(n);
            function n() {
                return (
                    (function (t, e) {
                        if (!(t instanceof e))
                            throw new TypeError(
                                'Cannot call a class as a function'
                            );
                    })(this, n),
                    e.apply(this, arguments)
                );
            }
            return (
                (function (t, e, n) {
                    e && u(t.prototype, e), n && u(t, n);
                })(n, [
                    {
                        key: 'config',
                        value: function () {
                            var t = this;
                            return {
                                rows: [
                                    {
                                        view: 'label',
                                        label: i[+this.getUrl()[1].page - 1]
                                            .title,
                                        align: 'center',
                                    },
                                    {
                                        view: 'radio',
                                        localId: 'options',
                                        options: ['1', '2'],
                                    },
                                    {
                                        view: 'label',
                                        localId: 'error',
                                        label: 'Необходимо выбрать вариант ответа',
                                        hidden: !0,
                                    },
                                    {
                                        view: 'button',
                                        value: 'Next',
                                        click: function () {
                                            if (!t.$$('options').getValue())
                                                return (
                                                    t.$$('error').show(),
                                                    void setTimeout(
                                                        function () {
                                                            t.$$(
                                                                'error'
                                                            ).hide();
                                                        },
                                                        2e3
                                                    )
                                                );
                                            '5' === t._url[1].page
                                                ? (t._nextUrl = '/layout/score')
                                                : (t.$$('error').hide(),
                                                  t.$$('options').setValue(),
                                                  (t._nextUrl =
                                                      '/layout/question/'.concat(
                                                          +t.getUrl()[1].page +
                                                              1
                                                      )));
                                            var e =
                                                view.parse(
                                                    webix.storage.local.get(
                                                        'answers'
                                                    )
                                                ) || {};
                                            (e[t._url[1].page] = t
                                                .$$('options')
                                                .getValue()),
                                                webix.storage.local.put(
                                                    'answers',
                                                    JSON.stringify(e)
                                                ),
                                                t.app.show(t._nextUrl);
                                        },
                                    },
                                ],
                            };
                        },
                    },
                    {
                        key: 'initQuestion',
                        value: function (t, e) {
                            t.queryView({ view: 'label' }).setValue(i[e].title),
                                (this.$$('options').data.options =
                                    i[e].options),
                                this.$$('options').refresh();
                        },
                    },
                    {
                        key: 'init',
                        value: function (t, e) {
                            e.length > 1 &&
                                this.initQuestion(t, +e[1].page - 1),
                                (this._url = e);
                        },
                    },
                    {
                        key: 'urlChange',
                        value: function (t, e) {
                            e.length > 1 &&
                                this.initQuestion(t, +e[1].page - 1),
                                (this._url = e);
                        },
                    },
                ]),
                n
            );
        })();
    },
    function (t, e) {},
    function (t, e, n) {
        'use strict';
        n.r(e),
            n.d(e, 'default', function () {
                return c;
            });
        var r = n(0);
        function i(t) {
            '@babel/helpers - typeof';
            return (i =
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
        function o(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    'value' in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r);
            }
        }
        function u(t, e) {
            return (u =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        function a(t) {
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
                var n,
                    r = s(t);
                if (e) {
                    var o = s(this).constructor;
                    n = Reflect.construct(r, arguments, o);
                } else n = r.apply(this, arguments);
                return (function (t, e) {
                    if (e && ('object' === i(e) || 'function' == typeof e))
                        return e;
                    return (function (t) {
                        if (void 0 === t)
                            throw new ReferenceError(
                                "this hasn't been initialised - super() hasn't been called"
                            );
                        return t;
                    })(t);
                })(this, n);
            };
        }
        function s(t) {
            return (s = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        var c = (function (t) {
            !(function (t, e) {
                if ('function' != typeof e && null !== e)
                    throw new TypeError(
                        'Super expression must either be null or a function'
                    );
                (t.prototype = Object.create(e && e.prototype, {
                    constructor: { value: t, writable: !0, configurable: !0 },
                })),
                    e && u(t, e);
            })(n, r['c']);
            var e = a(n);
            function n() {
                return (
                    (function (t, e) {
                        if (!(t instanceof e))
                            throw new TypeError(
                                'Cannot call a class as a function'
                            );
                    })(this, n),
                    e.apply(this, arguments)
                );
            }
            return (
                (function (t, e, n) {
                    e && o(t.prototype, e), n && o(t, n);
                })(n, [
                    {
                        key: 'validateUser',
                        value: function () {
                            return (
                                this.$$('firstname').getValue() &&
                                this.$$('lastname').getValue()
                            );
                        },
                    },
                    {
                        key: 'populatePayload',
                        value: function () {
                            var t = this.$$('firstname').getValue(),
                                e = this.$$('lastname').getValue();
                            return {
                                username: 'student1',
                                nickname: ''.concat(t, ' ').concat(e),
                                template: 'default',
                                subject: 'Test 1',
                            };
                        },
                    },
                    {
                        key: 'config',
                        value: function () {
                            var t = this;
                            return {
                                rows: [
                                    {
                                        view: 'form',
                                        id: 'log_form',
                                        elements: [
                                            {
                                                view: 'text',
                                                localId: 'firstname',
                                                label: 'Имя',
                                                name: 'firstname',
                                            },
                                            {
                                                view: 'text',
                                                localId: 'lastname',
                                                label: 'Фамилия',
                                                name: 'lastname',
                                            },
                                            {
                                                view: 'label',
                                                localId: 'error',
                                                label: 'Введите имя и фамилию',
                                                name: 'error',
                                                hidden: !0,
                                            },
                                            {
                                                view: 'button',
                                                value: 'Start',
                                                paddingY: 25,
                                                id: 'start',
                                                css: 'webix_primary',
                                                click: function () {
                                                    if (t.validateUser()) {
                                                        t.$$('error').hide();
                                                        var e =
                                                            t.populatePayload();
                                                        webix
                                                            .ajax()
                                                            .post(
                                                                '/api/token',
                                                                e
                                                            )
                                                            .then(function (t) {
                                                                return t.json();
                                                            })
                                                            .then(function (e) {
                                                                var n = e.id,
                                                                    r = e.token,
                                                                    i =
                                                                        new Supervisor(
                                                                            {
                                                                                url: 'https://dev04.proctoring.online',
                                                                            }
                                                                        );
                                                                i.init({
                                                                    provider:
                                                                        'jwt',
                                                                    token: r,
                                                                })
                                                                    .then(
                                                                        function () {
                                                                            return i.start();
                                                                        }
                                                                    )
                                                                    .catch(
                                                                        function (
                                                                            t
                                                                        ) {
                                                                            alert(
                                                                                t.toString()
                                                                            ),
                                                                                (location.href =
                                                                                    '/');
                                                                        }
                                                                    )
                                                                    .then(
                                                                        function () {
                                                                            webix.storage.local.put(
                                                                                'session_id',
                                                                                n
                                                                            ),
                                                                                t.app.show(
                                                                                    '/layout/question/1'
                                                                                );
                                                                        }
                                                                    );
                                                            });
                                                    } else
                                                        t.$$('error').show(),
                                                            setTimeout(
                                                                function () {
                                                                    return t
                                                                        .$$(
                                                                            'error'
                                                                        )
                                                                        .hide();
                                                                },
                                                                1e3
                                                            );
                                                },
                                            },
                                        ],
                                    },
                                ],
                            };
                        },
                    },
                ]),
                n
            );
        })();
    },
    function (t, e) {},
    function (t, e, n) {
        'use strict';
        n.r(e),
            n.d(e, 'default', function () {
                return c;
            });
        var r = n(0);
        function i(t) {
            '@babel/helpers - typeof';
            return (i =
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
        function o(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    'value' in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r);
            }
        }
        function u(t, e) {
            return (u =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        function a(t) {
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
                var n,
                    r = s(t);
                if (e) {
                    var o = s(this).constructor;
                    n = Reflect.construct(r, arguments, o);
                } else n = r.apply(this, arguments);
                return (function (t, e) {
                    if (e && ('object' === i(e) || 'function' == typeof e))
                        return e;
                    return (function (t) {
                        if (void 0 === t)
                            throw new ReferenceError(
                                "this hasn't been initialised - super() hasn't been called"
                            );
                        return t;
                    })(t);
                })(this, n);
            };
        }
        function s(t) {
            return (s = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        var c = (function (t) {
            !(function (t, e) {
                if ('function' != typeof e && null !== e)
                    throw new TypeError(
                        'Super expression must either be null or a function'
                    );
                (t.prototype = Object.create(e && e.prototype, {
                    constructor: { value: t, writable: !0, configurable: !0 },
                })),
                    e && u(t, e);
            })(n, r['c']);
            var e = a(n);
            function n() {
                return (
                    (function (t, e) {
                        if (!(t instanceof e))
                            throw new TypeError(
                                'Cannot call a class as a function'
                            );
                    })(this, n),
                    e.apply(this, arguments)
                );
            }
            return (
                (function (t, e, n) {
                    e && o(t.prototype, e), n && o(t, n);
                })(n, [
                    {
                        key: 'config',
                        value: function () {
                            return {
                                type: 'clean',
                                paddingX: 5,
                                css: 'app_layout',
                                cols: [
                                    {
                                        rows: [
                                            {
                                                css: 'webix_shadow_medium',
                                                rows: [
                                                    {
                                                        type: 'header',
                                                        template: 'Quiz',
                                                        css: 'webix_header app_header',
                                                    },
                                                    {
                                                        view: 'menu',
                                                        id: 'top:menu',
                                                        css: 'app_menu',
                                                        width: 220,
                                                        layout: 'y',
                                                        select: !0,
                                                        template:
                                                            "<span class='webix_icon #icon#'></span> #value# ",
                                                        data: [
                                                            {
                                                                value: 'Подключение',
                                                                id: 'start',
                                                                icon: 'wxi-columns',
                                                            },
                                                            {
                                                                value: 'Вопрос 1',
                                                                id: 'question/1',
                                                                icon: 'wxi-pencil',
                                                            },
                                                            {
                                                                value: 'Вопрос 2',
                                                                id: 'question/2',
                                                                icon: 'wxi-pencil',
                                                            },
                                                            {
                                                                value: 'Вопрос 3',
                                                                id: 'question/3',
                                                                icon: 'wxi-pencil',
                                                            },
                                                            {
                                                                value: 'Вопрос 4',
                                                                id: 'question/4',
                                                                icon: 'wxi-pencil',
                                                            },
                                                            {
                                                                value: 'Вопрос 5',
                                                                id: 'question/5',
                                                                icon: 'wxi-pencil',
                                                            },
                                                            {
                                                                value: 'Заключение',
                                                                id: 'score',
                                                                icon: 'wxi-columns',
                                                            },
                                                        ],
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        type: 'wide',
                                        paddingY: 10,
                                        paddingX: 5,
                                        rows: [{ $subview: !0 }],
                                    },
                                ],
                            };
                        },
                    },
                    {
                        key: 'init',
                        value: function () {
                            this.use(r.d.Menu, 'top:menu');
                        },
                    },
                ]),
                n
            );
        })();
    },
    ,
    function (t, e, n) {
        var r = { './en': 2, './en.js': 2 };
        function i(t) {
            var e = o(t);
            return n(e);
        }
        function o(t) {
            var e = r[t];
            if (!(e + 1)) {
                var n = new Error("Cannot find module '" + t + "'");
                throw ((n.code = 'MODULE_NOT_FOUND'), n);
            }
            return e;
        }
        (i.keys = function () {
            return Object.keys(r);
        }),
            (i.resolve = o),
            (t.exports = i),
            (i.id = 7);
    },
    function (t, e, n) {
        var r = {
            './layout': 5,
            './layout.js': 5,
            './question': 1,
            './question.js': 1,
            './score': 4,
            './score.js': 4,
            './start': 3,
            './start.js': 3,
        };
        function i(t) {
            var e = o(t);
            return n(e);
        }
        function o(t) {
            var e = r[t];
            if (!(e + 1)) {
                var n = new Error("Cannot find module '" + t + "'");
                throw ((n.code = 'MODULE_NOT_FOUND'), n);
            }
            return e;
        }
        (i.keys = function () {
            return Object.keys(r);
        }),
            (i.resolve = o),
            (t.exports = i),
            (i.id = 8);
    },
    ,
    function (t, e, n) {},
    function (t, e, n) {
        'use strict';
        n.r(e),
            n.d(e, 'default', function () {
                return l;
            });
        n(10);
        var r = n(0);
        function i(t) {
            '@babel/helpers - typeof';
            return (i =
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
        function o(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e &&
                    (r = r.filter(function (e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })),
                    n.push.apply(n, r);
            }
            return n;
        }
        function u(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2
                    ? o(Object(n), !0).forEach(function (e) {
                          a(t, e, n[e]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                          t,
                          Object.getOwnPropertyDescriptors(n)
                      )
                    : o(Object(n)).forEach(function (e) {
                          Object.defineProperty(
                              t,
                              e,
                              Object.getOwnPropertyDescriptor(n, e)
                          );
                      });
            }
            return t;
        }
        function a(t, e, n) {
            return (
                e in t
                    ? Object.defineProperty(t, e, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (t[e] = n),
                t
            );
        }
        function s(t, e) {
            return (s =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        function c(t) {
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
                var n,
                    r = f(t);
                if (e) {
                    var o = f(this).constructor;
                    n = Reflect.construct(r, arguments, o);
                } else n = r.apply(this, arguments);
                return (function (t, e) {
                    if (e && ('object' === i(e) || 'function' == typeof e))
                        return e;
                    return (function (t) {
                        if (void 0 === t)
                            throw new ReferenceError(
                                "this hasn't been initialised - super() hasn't been called"
                            );
                        return t;
                    })(t);
                })(this, n);
            };
        }
        function f(t) {
            return (f = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        var l = (function (t) {
            !(function (t, e) {
                if ('function' != typeof e && null !== e)
                    throw new TypeError(
                        'Super expression must either be null or a function'
                    );
                (t.prototype = Object.create(e && e.prototype, {
                    constructor: { value: t, writable: !0, configurable: !0 },
                })),
                    e && s(t, e);
            })(n, r['b']);
            var e = c(n);
            function n(t) {
                !(function (t, e) {
                    if (!(t instanceof e))
                        throw new TypeError(
                            'Cannot call a class as a function'
                        );
                })(this, n);
                var i = {
                    id: 'webix-jet-app',
                    version: '1.1.0',
                    router: r.a,
                    debug: !1,
                    start: '/layout/start',
                };
                return e.call(this, u(u({}, i), t));
            }
            return n;
        })();
        webix.ready(function () {
            return new l().render();
        });
    },
]);