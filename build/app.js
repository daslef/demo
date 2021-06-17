(() => {
    var t = {
            644: (t, e, n) => {
                'use strict';
                function r(t) {
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
                                          !Object.prototype.hasOwnProperty.call(
                                              t,
                                              e
                                          ) && null !== (t = l(t));

                                      );
                                      return t;
                                  })(t, e);
                                  if (r) {
                                      var i = Object.getOwnPropertyDescriptor(
                                          r,
                                          e
                                      );
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
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0,
                        },
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
                function s(t) {
                    var e = (function () {
                        if ('undefined' == typeof Reflect || !Reflect.construct)
                            return !1;
                        if (Reflect.construct.sham) return !1;
                        if ('function' == typeof Proxy) return !0;
                        try {
                            return (
                                Boolean.prototype.valueOf.call(
                                    Reflect.construct(
                                        Boolean,
                                        [],
                                        function () {}
                                    )
                                ),
                                !0
                            );
                        } catch (t) {
                            return !1;
                        }
                    })();
                    return function () {
                        var n,
                            r = l(t);
                        if (e) {
                            var i = l(this).constructor;
                            n = Reflect.construct(r, arguments, i);
                        } else n = r.apply(this, arguments);
                        return a(this, n);
                    };
                }
                function a(t, e) {
                    return !e || ('object' !== r(e) && 'function' != typeof e)
                        ? c(t)
                        : e;
                }
                function c(t) {
                    if (void 0 === t)
                        throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called"
                        );
                    return t;
                }
                function l(t) {
                    return (l = Object.setPrototypeOf
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
                                if (t) {
                                    if ('string' == typeof t) return p(t, e);
                                    var n = Object.prototype.toString
                                        .call(t)
                                        .slice(8, -1);
                                    return (
                                        'Object' === n &&
                                            t.constructor &&
                                            (n = t.constructor.name),
                                        'Map' === n || 'Set' === n
                                            ? Array.from(t)
                                            : 'Arguments' === n ||
                                              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                  n
                                              )
                                            ? p(t, e)
                                            : void 0
                                    );
                                }
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
                        s = !1;
                    return {
                        s: function () {
                            n = n.call(t);
                        },
                        n: function () {
                            var t = n.next();
                            return (u = t.done), t;
                        },
                        e: function (t) {
                            (s = !0), (o = t);
                        },
                        f: function () {
                            try {
                                u || null == n.return || n.return();
                            } finally {
                                if (s) throw o;
                            }
                        },
                    };
                }
                function p(t, e) {
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
                function v(t, e, n) {
                    return e && h(t.prototype, e), n && h(t, n), t;
                }
                function y(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError(
                            'Cannot call a class as a function'
                        );
                }
                n.d(e, { Gr: () => X, Dd: () => $, iC: () => x, UT: () => j });
                var d = function t() {
                        y(this, t);
                    },
                    b = (function () {
                        function t(e) {
                            y(this, t),
                                (this.webixJet = !0),
                                (this.webix = e),
                                (this._events = []),
                                (this._subs = {}),
                                (this._data = {});
                        }
                        return (
                            v(t, [
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
                                                        n.config.localId ===
                                                            t) &&
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
                                        return (
                                            this._events.push({
                                                obj: t,
                                                id: r,
                                            }),
                                            r
                                        );
                                    },
                                },
                                {
                                    key: 'contains',
                                    value: function (t) {
                                        for (var e in this._subs) {
                                            var n = this._subs[e].view;
                                            if (n === t || n.contains(t))
                                                return !0;
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
                                            var t = this._events,
                                                e = t.length - 1;
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
                                            this.webix.extend(
                                                this._data,
                                                t.params,
                                                !0
                                            );
                                    },
                                },
                                {
                                    key: '_getDefaultSub',
                                    value: function () {
                                        if (this._subs.default)
                                            return this._subs.default;
                                        for (var t in this._subs) {
                                            var e = this._subs[t];
                                            if (
                                                !e.branch &&
                                                e.view &&
                                                '_top' !== t
                                            ) {
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
                                        return (
                                            !(!e && e !== this) &&
                                            t._routed_view()
                                        );
                                    },
                                },
                            ]),
                            t
                        );
                    })();
                function g(t) {
                    '/' === t[0] && (t = t.substr(1));
                    for (
                        var e = t.split('/'), n = [], r = 0;
                        r < e.length;
                        r++
                    ) {
                        var i = e[r],
                            o = {},
                            u = i.indexOf(':');
                        if ((-1 === u && (u = i.indexOf('?')), -1 !== u)) {
                            var s,
                                a = f(i.substr(u + 1).split(/[\:\?\&]/g));
                            try {
                                for (a.s(); !(s = a.n()).done; ) {
                                    var c = s.value.split('=');
                                    o[c[0]] = decodeURIComponent(c[1]);
                                }
                            } catch (t) {
                                a.e(t);
                            } finally {
                                a.f();
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
                function w(t) {
                    var e,
                        n = [],
                        r = f(t);
                    try {
                        for (r.s(); !(e = r.n()).done; ) {
                            var i = e.value;
                            n.push('/' + i.page);
                            var o = m(i.params);
                            o && n.push('?' + o);
                        }
                    } catch (t) {
                        r.e(t);
                    } finally {
                        r.f();
                    }
                    return n.join('');
                }
                function m(t) {
                    var e = [];
                    for (var n in t)
                        e.length && e.push('&'),
                            e.push(n + '=' + encodeURIComponent(t[n]));
                    return e.join('');
                }
                var _ = (function () {
                        function t(e, n) {
                            y(this, t),
                                (this._next = 1),
                                (this.route =
                                    'string' == typeof e
                                        ? { url: g(e), path: e }
                                        : e),
                                (this.index = n);
                        }
                        return (
                            v(t, [
                                {
                                    key: 'current',
                                    value: function () {
                                        return this.route.url[this.index];
                                    },
                                },
                                {
                                    key: 'next',
                                    value: function () {
                                        return this.route.url[
                                            this.index + this._next
                                        ];
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
                                            var t = this.route.url,
                                                e = this.index + 1;
                                            e < t.length;
                                            e++
                                        )
                                            t[e].isNew = !0;
                                    },
                                },
                                {
                                    key: 'toString',
                                    value: function () {
                                        var t = w(this.suburl());
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
                                                this.index +
                                                    (e ? this._next : 0)
                                            )),
                                            t)
                                        ) {
                                            n = n.concat(g(t));
                                            for (var i = 0; i < n.length; i++)
                                                r[i] && (n[i].view = r[i].view),
                                                    r[i] &&
                                                        n[i].page ===
                                                            r[i].page &&
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
                                            (this.route.path = w(e)),
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
                                            var o = w(i),
                                                u = {
                                                    url: i,
                                                    redirect: o,
                                                    confirm: Promise.resolve(),
                                                },
                                                s = e ? e.app : null;
                                            !s ||
                                            s.callEvent('app:guard', [
                                                u.redirect,
                                                e,
                                                u,
                                            ])
                                                ? u.confirm
                                                      .catch(function (t) {
                                                          return n(t);
                                                      })
                                                      .then(function () {
                                                          if (
                                                              null !==
                                                              u.redirect
                                                          ) {
                                                              if (
                                                                  u.redirect !==
                                                                  o
                                                              )
                                                                  return (
                                                                      s.show(
                                                                          u.redirect
                                                                      ),
                                                                      void n(
                                                                          new d()
                                                                      )
                                                                  );
                                                              (r.route.path =
                                                                  o),
                                                                  (r.route.url =
                                                                      i),
                                                                  t();
                                                          } else n(new d());
                                                      })
                                                : n(new d());
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
                                            url: this.route.url.slice(
                                                this.index + 1
                                            ),
                                            path: '',
                                        };
                                        return (
                                            e.url.length && (e.path = w(e.url)),
                                            new t(e, 0)
                                        );
                                    },
                                },
                                {
                                    key: 'update',
                                    value: function (t, e, n) {
                                        var r =
                                            this.route.url[
                                                this.index + (n || 0)
                                            ];
                                        if (!r)
                                            return (
                                                this.route.url.push({
                                                    page: '',
                                                    params: {},
                                                }),
                                                this.update(t, e, n)
                                            );
                                        '' === t
                                            ? (r.page = e)
                                            : (r.params[t] = e),
                                            (this.route.path = w(
                                                this.route.url
                                            ));
                                    },
                                },
                            ]),
                            t
                        );
                    })(),
                    x = (function (t) {
                        o(n, t);
                        var e = s(n);
                        function n(t, r) {
                            var i;
                            return (
                                y(this, n),
                                ((i = e.call(this, t.webix)).app = t),
                                (i._children = []),
                                i
                            );
                        }
                        return (
                            v(n, [
                                {
                                    key: 'ui',
                                    value: function (t, e) {
                                        var n =
                                                (e = e || {}).container ||
                                                t.container,
                                            i = this.app.createView(t);
                                        return (
                                            this._children.push(i),
                                            i.render(n, this._segment, this),
                                            'object' !== r(t) || t instanceof b
                                                ? i
                                                : i.getRoot()
                                        );
                                    },
                                },
                                {
                                    key: 'show',
                                    value: function (t, e) {
                                        if (
                                            ((e = e || {}), 'object' === r(t))
                                        ) {
                                            for (var n in t)
                                                this.setParam(n, t[n]);
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
                                                    : this.app.show(
                                                          '/' + t.substr(3)
                                                      );
                                            }
                                            var o = this.getSubViewInfo(
                                                e.target
                                            );
                                            if (o) {
                                                if (o.parent !== this)
                                                    return o.parent.show(t, e);
                                                if (
                                                    e.target &&
                                                    'default' !== e.target
                                                )
                                                    return this._renderFrameLock(
                                                        e.target,
                                                        o.subview,
                                                        t
                                                    );
                                            } else if (t)
                                                return this.app.show('/' + t);
                                        }
                                        return this._show(
                                            this._segment,
                                            t,
                                            this
                                        );
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
                                                    r._init_url_data(),
                                                    r._urlChange()
                                                );
                                            })
                                            .then(function () {
                                                t.route.linkRouter &&
                                                    (r.app
                                                        .getRouter()
                                                        .set(t.route.path, {
                                                            silent: !0,
                                                        }),
                                                    r.app.callEvent(
                                                        'app:route',
                                                        [t.route.path]
                                                    ));
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
                                            i(
                                                l(n.prototype),
                                                'destructor',
                                                this
                                            ).call(this);
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
                                        return (
                                            this.getUrl(),
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
                                        'string' == typeof e &&
                                            (e = new _(e, 0)),
                                            (this._segment = e),
                                            (this._parent = n),
                                            this._init_url_data();
                                        var i =
                                            'string' ==
                                            typeof (t = t || document.body)
                                                ? this.webix.toNode(t)
                                                : t;
                                        return this._container !== i
                                            ? ((this._container = i),
                                              this._render(e))
                                            : this._urlChange().then(
                                                  function () {
                                                      return r.getRoot();
                                                  }
                                              );
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
                                                ? ((o = document.body),
                                                  (u = !0))
                                                : (o = this.webix.$$(i.id)),
                                            !this.app || !o)
                                        )
                                            return Promise.reject(null);
                                        var s = this._segment.current(),
                                            a = { ui: {} };
                                        this.app.copyConfig(
                                            t,
                                            a.ui,
                                            this._subs
                                        ),
                                            this.app.callEvent('app:render', [
                                                this,
                                                e,
                                                a,
                                            ]),
                                            (a.ui.$scope = this),
                                            !i &&
                                                s.isNew &&
                                                s.view &&
                                                s.view.destructor();
                                        try {
                                            if (i && !u) {
                                                var c = o,
                                                    l = c.getParentView();
                                                l &&
                                                    'multiview' === l.name &&
                                                    !a.ui.id &&
                                                    (a.ui.id = c.config.id);
                                            }
                                            this._root = this.app.webix.ui(
                                                a.ui,
                                                o
                                            );
                                            var f = this._root;
                                            u &&
                                                f.setPosition &&
                                                !f.isVisible() &&
                                                f.show(),
                                                i &&
                                                    (i.view &&
                                                        i.view !== this &&
                                                        i.view !== this.app &&
                                                        i.view.destructor(),
                                                    (i.id =
                                                        this._root.config.id),
                                                    this.getParentView() ||
                                                    !this.app.app
                                                        ? (i.view = this)
                                                        : (i.view = this.app)),
                                                s.isNew &&
                                                    ((s.view = this),
                                                    (s.isNew = !1)),
                                                (n = Promise.resolve(
                                                    this._init(this._root, e)
                                                ).then(function () {
                                                    return r
                                                        ._urlChange()
                                                        .then(function () {
                                                            return (
                                                                (r._initUrl =
                                                                    null),
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
                                                i = this._renderFrameLock(
                                                    n,
                                                    r,
                                                    null
                                                );
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
                                                (e.view.destructor(),
                                                (e.view = null));
                                        }
                                        if (
                                            (null !== n && (e.url = n), e.route)
                                        ) {
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
                                                    (e.route = new _(e.url, 0)),
                                                    this._createSubView(
                                                        e,
                                                        e.route
                                                    )
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
                                                this.app.error(
                                                    'app:error:initview',
                                                    [e, t]
                                                ),
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
                                            var t = this._children,
                                                e = t.length - 1;
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
                    })(b),
                    k = (function (t) {
                        o(n, t);
                        var e = s(n);
                        function n(t, r) {
                            var i;
                            return (
                                y(this, n),
                                ((i = e.call(this, t, r))._ui = r.ui),
                                i
                            );
                        }
                        return (
                            v(n, [
                                {
                                    key: 'config',
                                    value: function () {
                                        return this._ui;
                                    },
                                },
                            ]),
                            n
                        );
                    })(x),
                    S = (function () {
                        function t(e, n, r) {
                            y(this, t), (this.path = ''), (this.app = r);
                        }
                        return (
                            v(t, [
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
                    O = !0,
                    P = (function (t) {
                        o(n, t);
                        var e = s(n);
                        function n(t) {
                            var r;
                            y(this, n);
                            var i = (t || {}).webix || window.webix;
                            return (
                                ((r = e.call(this, i)).config = r.webix.extend(
                                    {
                                        name: 'App',
                                        version: '1.0',
                                        start: '/home',
                                    },
                                    t,
                                    !0
                                )),
                                (r.app = r.config.app),
                                (r.ready = Promise.resolve()),
                                (r._services = {}),
                                r.webix.extend(c(r), r.webix.EventSystem),
                                r
                            );
                        }
                        return (
                            v(n, [
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
                                                (e = this._services[t] =
                                                    e(this)),
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
                                            i(
                                                l(n.prototype),
                                                'destructor',
                                                this
                                            ).call(this);
                                    },
                                },
                                {
                                    key: 'copyConfig',
                                    value: function (t, e, n) {
                                        if (
                                            ((t instanceof b ||
                                                ('function' == typeof t &&
                                                    t.prototype instanceof
                                                        b)) &&
                                                (t = { $subview: t }),
                                            void 0 !== t.$subview)
                                        )
                                            return this.addSubView(t, e, n);
                                        for (var i in ((e =
                                            e ||
                                            (t instanceof Array ? [] : {})),
                                        t)) {
                                            var o = t[i];
                                            if (
                                                ('function' == typeof o &&
                                                    o.prototype instanceof b &&
                                                    (o = { $subview: o }),
                                                !o ||
                                                    'object' !== r(o) ||
                                                    o instanceof
                                                        this.webix
                                                            .DataCollection ||
                                                    o instanceof RegExp ||
                                                    o instanceof Map)
                                            )
                                                e[i] = o;
                                            else if (o instanceof Date)
                                                e[i] = new Date(o);
                                            else {
                                                var u = this.copyConfig(
                                                    o,
                                                    o instanceof Array
                                                        ? []
                                                        : {},
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
                                            (e =
                                                e ||
                                                t.target ||
                                                t.srcElement) &&
                                            e.getAttribute
                                        ) {
                                            var n = e.getAttribute('trigger');
                                            if (n)
                                                return (
                                                    this._forView(
                                                        e,
                                                        function (t) {
                                                            return t.app.trigger(
                                                                n
                                                            );
                                                        }
                                                    ),
                                                    (t.cancelBubble = !0),
                                                    t.preventDefault()
                                                );
                                            var r = e.getAttribute('route');
                                            if (r)
                                                return (
                                                    this._forView(
                                                        e,
                                                        function (t) {
                                                            return t.show(r);
                                                        }
                                                    ),
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
                                                          t.callEvent(
                                                              'app:route',
                                                              [t.getUrl()]
                                                          ),
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
                                                            : this._loadViewDynamic(
                                                                  t
                                                              ));
                                        } catch (e) {
                                            r = this._loadError(t, e);
                                        }
                                        return (
                                            r.then || (r = Promise.resolve(r)),
                                            r
                                                .then(function (t) {
                                                    return t.__esModule
                                                        ? t.default
                                                        : t;
                                                })
                                                .catch(function (n) {
                                                    return e._loadError(t, n);
                                                })
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
                                            ? this.loadView(t.page).then(
                                                  function (t) {
                                                      return e.createView(
                                                          t,
                                                          name
                                                      );
                                                  }
                                              )
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
                                                    router: S,
                                                });
                                            if (t.prototype instanceof b)
                                                return new t(this, { name: e });
                                            t = t(this);
                                        }
                                        return t instanceof b
                                            ? t
                                            : new k(this, { name: e, ui: t });
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
                                                n = new Array(
                                                    e > 1 ? e - 1 : 0
                                                ),
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
                                                    r.indexOf(
                                                        'Module build failed'
                                                    )
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
                                        this.$router
                                            ? (i =
                                                  'string' == typeof e
                                                      ? e
                                                      : this.app
                                                      ? e.split().route.path ||
                                                        this.config.start
                                                      : e.toString())
                                            : (O &&
                                                  'tagName' in
                                                      this._container &&
                                                  (this.webix.event(
                                                      document.body,
                                                      'click',
                                                      function (t) {
                                                          return r.clickHandler(
                                                              t
                                                          );
                                                      }
                                                  ),
                                                  (O = !1)),
                                              'string' == typeof e &&
                                                  (e = new _(e, 0)),
                                              (this._subSegment =
                                                  this._first_start(e)),
                                              (this._subSegment.route.linkRouter =
                                                  !0));
                                        var o = this.getSubView(),
                                            u = this._subSegment,
                                            s = u
                                                .show(i, o)
                                                .then(function () {
                                                    return r.createFromURL(
                                                        u.current()
                                                    );
                                                })
                                                .then(function (e) {
                                                    return e.render(t, u);
                                                })
                                                .then(function (t) {
                                                    return (
                                                        r.$router.set(
                                                            u.route.path,
                                                            { silent: !0 }
                                                        ),
                                                        r.callEvent(
                                                            'app:route',
                                                            [r.getUrl()]
                                                        ),
                                                        t
                                                    );
                                                });
                                        return (
                                            (this.ready = this.ready.then(
                                                function () {
                                                    return s;
                                                }
                                            )),
                                            s
                                        );
                                    },
                                },
                                {
                                    key: 'getSubView',
                                    value: function () {
                                        if (this._subSegment) {
                                            var t =
                                                this._subSegment.current().view;
                                            if (t) return t;
                                        }
                                        return new x(this, {});
                                    },
                                },
                                {
                                    key: '_first_start',
                                    value: function (t) {
                                        var e = this;
                                        if (
                                            ((this._segment = t),
                                            (this.$router =
                                                new this.config.router(
                                                    function (t) {
                                                        return setTimeout(
                                                            function () {
                                                                e.show(t).catch(
                                                                    function (
                                                                        t
                                                                    ) {
                                                                        if (
                                                                            !(
                                                                                t instanceof
                                                                                d
                                                                            )
                                                                        )
                                                                            throw t;
                                                                    }
                                                                );
                                                            },
                                                            1
                                                        );
                                                    },
                                                    this.config,
                                                    this
                                                )),
                                            this._container === document.body &&
                                                !1 !== this.config.animation)
                                        ) {
                                            var n = this._container;
                                            this.webix.html.addCss(
                                                n,
                                                'webixappstart'
                                            ),
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
                                                    ? (t.refresh(),
                                                      (t = t.split()))
                                                    : (t = new _(
                                                          this.config.start,
                                                          0
                                                      )));
                                        else {
                                            var r = this.$router.get();
                                            r ||
                                                ((r = this.config.start),
                                                this.$router.set(r, {
                                                    silent: !0,
                                                })),
                                                (t = new _(r, 0));
                                        }
                                        return t;
                                    },
                                },
                                {
                                    key: '_loadError',
                                    value: function (t, e) {
                                        return (
                                            this.error('app:error:resolve', [
                                                e,
                                                t,
                                            ]),
                                            { template: ' ' }
                                        );
                                    },
                                },
                                {
                                    key: 'addSubView',
                                    value: function (t, e, n) {
                                        var r =
                                                !0 !== t.$subview
                                                    ? t.$subview
                                                    : null,
                                            i =
                                                t.name ||
                                                (r
                                                    ? this.webix.uid()
                                                    : 'default');
                                        return (
                                            (e.id =
                                                t.id || 's' + this.webix.uid()),
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
                    })(b),
                    j = (function () {
                        function t(e, n) {
                            var r = this;
                            y(this, t),
                                (this.config = n || {}),
                                this._detectPrefix(),
                                (this.cb = e),
                                (window.onpopstate = function () {
                                    return r.cb(r.get());
                                });
                        }
                        return (
                            v(t, [
                                {
                                    key: 'set',
                                    value: function (t, e) {
                                        var n = this;
                                        if (this.config.routes) {
                                            var r = t.split('?', 2);
                                            for (var i in this.config.routes)
                                                if (
                                                    this.config.routes[i] ===
                                                    r[0]
                                                ) {
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
                                            ((t =
                                                '/' !== t && '#' !== t
                                                    ? t
                                                    : ''),
                                            this.config.routes)
                                        ) {
                                            var e = t.split('?', 2),
                                                n = this.config.routes[e[0]];
                                            n &&
                                                (t =
                                                    n +
                                                    (e.length > 1
                                                        ? '?' + e[1]
                                                        : ''));
                                        }
                                        return t;
                                    },
                                },
                                {
                                    key: '_detectPrefix',
                                    value: function () {
                                        var t = this.config.routerPrefix;
                                        (this.sufix =
                                            '#' + (void 0 === t ? '!' : t)),
                                            (this.prefix =
                                                document.location.href.split(
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
                    R = !1;
                function E(t) {
                    if (!R && t) {
                        R = !0;
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
                                                  (t.ui.$freeze = !1),
                                                  t.ui.resize(),
                                                  e
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
                                        for (var s in o) u(s);
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
                                                (r.view.destructor(),
                                                delete e[n]);
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
                var $ = (function (t) {
                    o(r, t);
                    var e = s(r);
                    function r(t) {
                        var n;
                        return (
                            y(this, r),
                            (t.router = t.router || j),
                            E((n = e.call(this, t)).webix),
                            n
                        );
                    }
                    return (
                        v(r, [
                            {
                                key: '_loadViewDynamic',
                                value: function (t) {
                                    return n(768)(
                                        './'.concat(t.replace(/\./g, '/'))
                                    );
                                },
                            },
                        ]),
                        r
                    );
                })(P);
                function V(t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e);
                }
                function C(t, e, n) {
                    for (var r in t) V(t, r) && e.call(n || t, t[r], r, t);
                }
                function T(t) {
                    (t = 'Warning: ' + t),
                        'undefined' != typeof console && console.error(t);
                    try {
                        throw new Error(t);
                    } catch (t) {}
                }
                var U = String.prototype.replace,
                    Q = String.prototype.split,
                    L = '||||',
                    I = function (t) {
                        var e = t % 10;
                        return 11 !== t && 1 === e
                            ? 0
                            : 2 <= e && e <= 4 && !(t >= 12 && t <= 14)
                            ? 1
                            : 2;
                    },
                    D = {
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
                            return 2 <= e &&
                                e <= 4 &&
                                (t % 100 < 10 || t % 100 >= 20)
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
                    N = {
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
                function A(t) {
                    return t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                }
                var B = /\$/g,
                    M = /%\{(.*?)\}/g;
                function F(t, e, n, r) {
                    if ('string' != typeof t)
                        throw new TypeError(
                            'Polyglot.transformPhrase expects argument #1 to be string'
                        );
                    if (null == e) return t;
                    var i = t,
                        o = r || M,
                        u = 'number' == typeof e ? { smart_count: e } : e;
                    if (null != u.smart_count && i) {
                        var s = Q.call(i, L);
                        i = (
                            s[
                                (function (t, e) {
                                    return D[
                                        (function (t) {
                                            var e,
                                                n =
                                                    ((e = {}),
                                                    C(N, function (t, n) {
                                                        C(t, function (t) {
                                                            e[t] = n;
                                                        });
                                                    }),
                                                    e);
                                            return (
                                                n[t] ||
                                                n[Q.call(t, /-/, 1)[0]] ||
                                                n.en
                                            );
                                        })(t)
                                    ](e);
                                })(n || 'en', u.smart_count)
                            ] || s[0]
                        ).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
                    }
                    return U.call(i, o, function (t, e) {
                        return V(u, e) && null != u[e]
                            ? U.call(u[e], B, '$$')
                            : t;
                    });
                }
                function q(t) {
                    var e = t || {};
                    (this.phrases = {}),
                        this.extend(e.phrases || {}),
                        (this.currentLocale = e.locale || 'en');
                    var n = e.allowMissing ? F : null;
                    (this.onMissingKey =
                        'function' == typeof e.onMissingKey
                            ? e.onMissingKey
                            : n),
                        (this.warn = e.warn || T),
                        (this.tokenRegex = (function (t) {
                            var e = (t && t.prefix) || '%{',
                                n = (t && t.suffix) || '}';
                            if (e === L || n === L)
                                throw new RangeError(
                                    '"||||" token is reserved for pluralization'
                                );
                            return new RegExp(A(e) + '(.*?)' + A(n), 'g');
                        })(e.interpolation));
                }
                (q.prototype.locale = function (t) {
                    return t && (this.currentLocale = t), this.currentLocale;
                }),
                    (q.prototype.extend = function (t, e) {
                        C(
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
                    (q.prototype.unset = function (t, e) {
                        'string' == typeof t
                            ? delete this.phrases[t]
                            : C(
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
                    (q.prototype.clear = function () {
                        this.phrases = {};
                    }),
                    (q.prototype.replace = function (t) {
                        this.clear(), this.extend(t);
                    }),
                    (q.prototype.t = function (t, e) {
                        var n,
                            r,
                            i = null == e ? {} : e;
                        return (
                            'string' == typeof this.phrases[t]
                                ? (n = this.phrases[t])
                                : 'string' == typeof i._
                                ? (n = i._)
                                : this.onMissingKey
                                ? (r = (0, this.onMissingKey)(
                                      t,
                                      i,
                                      this.currentLocale,
                                      this.tokenRegex
                                  ))
                                : (this.warn(
                                      'Missing translation for key: "' + t + '"'
                                  ),
                                  (r = t)),
                            'string' == typeof n &&
                                (r = F(
                                    n,
                                    i,
                                    this.currentLocale,
                                    this.tokenRegex
                                )),
                            r
                        );
                    }),
                    (q.prototype.has = function (t) {
                        return V(this.phrases, t);
                    }),
                    (q.transformPhrase = function (t, e, n) {
                        return F(t, e, n);
                    });
                var z = q;
                function K(t, e, n) {
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
                var H = {
                        good: 'check',
                        error: 'warning',
                        saving: 'refresh fa-spin',
                    },
                    G = { good: 'Ok', error: 'Error', saving: 'Connecting...' };
                function J(t, e, n) {
                    for (var r = 0; r < n.length; r++)
                        t[n[r]] = e[r + 1] ? e[r + 1].page : '';
                }
                var W = window.webix;
                W && E(W);
                var X = {
                        UnloadGuard: function (t, e, n) {
                            e.on(t, 'app:guard', function (t, r, i) {
                                if (r === e || r.contains(e)) {
                                    var o = n();
                                    i.confirm =
                                        !1 === o
                                            ? Promise.reject(new d())
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
                                var s = { phrases: n };
                                r.polyglot && t.webix.extend(s, r.polyglot);
                                var c = (a.polyglot = new z(s));
                                if (
                                    (c.locale(e),
                                    (a._ = t.webix.bind(c.t, c)),
                                    (o = e),
                                    i && i.put('lang', o),
                                    r.webix)
                                ) {
                                    var l = r.webix[e];
                                    l && t.webix.i18n.setLocale(l);
                                }
                                return u ? Promise.resolve() : t.refresh();
                            }
                            function s(t, e) {
                                if (!1 !== r.path) {
                                    var i = (r.path ? r.path + '/' : '') + t;
                                    u(t, n(755)('./' + i), e);
                                }
                            }
                            var a = {
                                getLang: function () {
                                    return o;
                                },
                                setLang: s,
                                setLangData: u,
                                _: null,
                                polyglot: null,
                            };
                            t.setService('locale', a), s(o, !0);
                        },
                        Menu: function (t, e, n) {
                            var r = e.getSubViewInfo().parent,
                                i = e.$$(n.id || n),
                                o = !1;
                            i.attachEvent('onchange', function () {
                                o || K(r, n, this.getValue());
                            }),
                                i.attachEvent('onafterselect', function () {
                                    if (!o) {
                                        var t = null;
                                        i.setValue
                                            ? (t = this.getValue())
                                            : i.getSelectedId &&
                                              (t = i.getSelectedId()),
                                            K(r, n, t);
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
                                                s = 0;
                                            s < u.length;
                                            s++
                                        ) {
                                            var a = u[s].getAttribute('title');
                                            a &&
                                                (a === e || a === o[0]
                                                    ? (u[s].disabled = !1)
                                                    : (u[s].disabled = !0));
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
                                s = n.ping || 3e5,
                                a = n.model,
                                c = n.user,
                                l = {
                                    getUser: function () {
                                        return c;
                                    },
                                    getStatus: function (t) {
                                        return t
                                            ? a
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
                                        return a.login(e, n).then(function (e) {
                                            if (((c = e), !e))
                                                throw new Error(
                                                    'Access denied'
                                                );
                                            t.callEvent('app:user:login', [c]),
                                                t.show(o);
                                        });
                                    },
                                    logout: function () {
                                        return (
                                            (c = null),
                                            a.logout().then(function (e) {
                                                return (
                                                    t.callEvent(
                                                        'app:user:logout',
                                                        []
                                                    ),
                                                    e
                                                );
                                            })
                                        );
                                    },
                                };
                            function f(t, e) {
                                t === i
                                    ? (l.logout(), (e.redirect = u))
                                    : t === r ||
                                      l.getStatus() ||
                                      (e.redirect = r);
                            }
                            t.setService('user', l),
                                t.attachEvent('app:guard', function (t, e, r) {
                                    return (
                                        !(!n.public || !n.public(t)) ||
                                        (void 0 === c &&
                                            (r.confirm = l
                                                .getStatus(!0)
                                                .then(function () {
                                                    return f(t, r);
                                                })),
                                        f(t, r))
                                    );
                                }),
                                s &&
                                    setInterval(function () {
                                        return l.getStatus(!0);
                                    }, s);
                        },
                        Status: function (t, e, n) {
                            var r = 'good',
                                i = 0,
                                o = !1,
                                u = n.expire;
                            u || !1 === u || (u = 2e3);
                            var s = n.texts || G,
                                a = n.icons || H;
                            function c(t) {
                                var i = e.$$(n.target);
                                i &&
                                    (t ||
                                        (t =
                                            "<div class='status_" +
                                            r +
                                            "'><span class='webix_icon fa-" +
                                            a[r] +
                                            "'></span> " +
                                            s[r] +
                                            '</div>'),
                                    i.setHTML(t));
                            }
                            function l() {
                                i--, v('good');
                            }
                            function f(t) {
                                i--, v('error', t);
                            }
                            function p(t) {
                                i++, v('saving'), t && t.then && t.then(l, f);
                            }
                            function h() {
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
                                                  ? t.error(
                                                        'app:error:server',
                                                        [n.responseText || n]
                                                    )
                                                  : u && setTimeout(h, u),
                                              c()));
                            }
                            function y(n) {
                                var r = t.webix.dp(n);
                                r &&
                                    (e.on(r, 'onAfterDataSend', p),
                                    e.on(
                                        r,
                                        'onAfterSaveError',
                                        function (t, e, n) {
                                            return f(n);
                                        }
                                    ),
                                    e.on(r, 'onAfterSave', l));
                            }
                            'string' == typeof n && (n = { target: n }),
                                t.setService('status', {
                                    getStatus: function () {
                                        return r;
                                    },
                                    setStatus: v,
                                    track: y,
                                }),
                                n.remote && e.on(t.webix, 'onRemoteCall', p),
                                n.ajax &&
                                    e.on(
                                        t.webix,
                                        'onBeforeAjax',
                                        function (t, e, n, r, i, o, u) {
                                            p(u);
                                        }
                                    ),
                                n.data && y(n.data);
                        },
                        UrlParam: function (t, e, n) {
                            var r = n.route || n,
                                i = {};
                            e.on(t, 'app:urlchange', function (t, n) {
                                e === t &&
                                    (J(i, n.suburl(), r), n.size(r.length + 1));
                            });
                            var o = e.setParam,
                                u = e.getParam;
                            (e.setParam = function (t, n, u) {
                                var s = r.indexOf(t);
                                return s >= 0
                                    ? ((i[t] = n),
                                      this._segment.update('', n, s + 1),
                                      u ? e.show(null) : void 0)
                                    : o.call(this, t, n, u);
                            }),
                                (e.getParam = function (t, e) {
                                    var n = i[t];
                                    return void 0 !== n
                                        ? n
                                        : u.call(this, t, e);
                                }),
                                J(i, e.getUrl(), r);
                        },
                    },
                    Y = window;
                Y.Promise || (Y.Promise = Y.webix.promise);
            },
            827: (t, e, n) => {
                'use strict';
                n.r(e), n.d(e, { default: () => r });
                const r = {
                    Preparation: 'Preparation',
                    'Question 1': 'Question 1',
                    'Question 2': 'Question 2',
                    'Question 3': 'Question 3',
                    'Question 4': 'Question 4',
                    'Question 5': 'Question 5',
                    Score: 'Score',
                };
            },
            699: (t, e, n) => {
                'use strict';
                n.r(e), n.d(e, { default: () => r });
                const r = {
                    Preparation: 'Preparación',
                    'Question 1': 'Pregunta 1',
                    'Question 2': 'Pregunta 2',
                    'Question 3': 'Pregunta 3',
                    'Question 4': 'Pregunta 4',
                    'Question 5': 'Pregunta 5',
                    Score: 'Resultado',
                };
            },
            801: (t, e, n) => {
                'use strict';
                n.r(e), n.d(e, { default: () => r });
                const r = {
                    Preparation: 'Подготовка',
                    'Question 1': 'Вопрос 1',
                    'Question 2': 'Вопрос 2',
                    'Question 3': 'Вопрос 3',
                    'Question 4': 'Вопрос 4',
                    'Question 5': 'Вопрос 5',
                    Score: 'Результат',
                };
            },
            748: (t, e, n) => {
                'use strict';
                n.r(e), n.d(e, { default: () => l });
                var r = n(644);
                function i(t) {
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
                    if (!(t instanceof e))
                        throw new TypeError(
                            'Cannot call a class as a function'
                        );
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
                function s(t, e) {
                    return (s =
                        Object.setPrototypeOf ||
                        function (t, e) {
                            return (t.__proto__ = e), t;
                        })(t, e);
                }
                function a(t, e) {
                    return !e || ('object' !== i(e) && 'function' != typeof e)
                        ? (function (t) {
                              if (void 0 === t)
                                  throw new ReferenceError(
                                      "this hasn't been initialised - super() hasn't been called"
                                  );
                              return t;
                          })(t)
                        : e;
                }
                function c(t) {
                    return (c = Object.setPrototypeOf
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
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0,
                            },
                        })),
                            e && s(t, e);
                    })(p, t);
                    var e,
                        n,
                        i,
                        l,
                        f =
                            ((i = p),
                            (l = (function () {
                                if (
                                    'undefined' == typeof Reflect ||
                                    !Reflect.construct
                                )
                                    return !1;
                                if (Reflect.construct.sham) return !1;
                                if ('function' == typeof Proxy) return !0;
                                try {
                                    return (
                                        Boolean.prototype.valueOf.call(
                                            Reflect.construct(
                                                Boolean,
                                                [],
                                                function () {}
                                            )
                                        ),
                                        !0
                                    );
                                } catch (t) {
                                    return !1;
                                }
                            })()),
                            function () {
                                var t,
                                    e = c(i);
                                if (l) {
                                    var n = c(this).constructor;
                                    t = Reflect.construct(e, arguments, n);
                                } else t = e.apply(this, arguments);
                                return a(this, t);
                            });
                    function p() {
                        return o(this, p), f.apply(this, arguments);
                    }
                    return (
                        (e = p),
                        (n = [
                            {
                                key: 'config',
                                value: function () {
                                    var t,
                                        e,
                                        n,
                                        r = this,
                                        i = this.app.getService('locale')._;
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
                                                                name: 'lang',
                                                                view: 'segmented',
                                                                label: '',
                                                                options: [
                                                                    {
                                                                        id: 'en',
                                                                        value: 'English',
                                                                    },
                                                                    {
                                                                        id: 'ru',
                                                                        value: 'Russian',
                                                                    },
                                                                    {
                                                                        id: 'es',
                                                                        value: 'Spanish',
                                                                    },
                                                                ],
                                                                click: function () {
                                                                    var t =
                                                                            r.app.getService(
                                                                                'locale'
                                                                            ),
                                                                        e = r
                                                                            .getRoot()
                                                                            .queryView(
                                                                                {
                                                                                    name: 'lang',
                                                                                }
                                                                            )
                                                                            .getValue();
                                                                    t.setLang(
                                                                        e
                                                                    );
                                                                },
                                                                value: this.app
                                                                    .getService(
                                                                        'locale'
                                                                    )
                                                                    .getLang(),
                                                            },
                                                            {
                                                                type: 'header',
                                                                template:
                                                                    'Quiz',
                                                                css: 'webix_header app_header',
                                                            },
                                                            ((n = function (t) {
                                                                return i(
                                                                    t.value
                                                                );
                                                            }),
                                                            (e = 'template') in
                                                            (t = {
                                                                view: 'menu',
                                                                id: 'top:menu',
                                                                localId: 'menu',
                                                                css: 'app_menu',
                                                                width: 220,
                                                                layout: 'y',
                                                                select: !0,
                                                                template:
                                                                    "<span class='webix_icon #icon#'></span> #value# ",
                                                                data: [
                                                                    {
                                                                        value: 'Preparation',
                                                                        id: 'start',
                                                                        icon: 'wxi-columns',
                                                                    },
                                                                    {
                                                                        value: 'Question 1',
                                                                        id: 'question/1',
                                                                        icon: 'wxi-pencil',
                                                                    },
                                                                    {
                                                                        value: 'Question 2',
                                                                        id: 'question/2',
                                                                        icon: 'wxi-pencil',
                                                                    },
                                                                    {
                                                                        value: 'Question 3',
                                                                        id: 'question/3',
                                                                        icon: 'wxi-pencil',
                                                                    },
                                                                    {
                                                                        value: 'Question 4',
                                                                        id: 'question/4',
                                                                        icon: 'wxi-pencil',
                                                                    },
                                                                    {
                                                                        value: 'Question 5',
                                                                        id: 'question/5',
                                                                        icon: 'wxi-pencil',
                                                                    },
                                                                    {
                                                                        value: 'Score',
                                                                        id: 'score',
                                                                        icon: 'wxi-columns',
                                                                    },
                                                                ],
                                                            })
                                                                ? Object.defineProperty(
                                                                      t,
                                                                      e,
                                                                      {
                                                                          value: n,
                                                                          enumerable:
                                                                              !0,
                                                                          configurable:
                                                                              !0,
                                                                          writable:
                                                                              !0,
                                                                      }
                                                                  )
                                                                : (t[e] = n),
                                                            t),
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
                                    this.use(r.Gr.Menu, 'top:menu');
                                },
                            },
                        ]) && u(e.prototype, n),
                        p
                    );
                })(r.iC);
            },
            671: (t, e, n) => {
                'use strict';
                function r(t) {
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
                function i(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError(
                            'Cannot call a class as a function'
                        );
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
                function s(t, e) {
                    return !e || ('object' !== r(e) && 'function' != typeof e)
                        ? (function (t) {
                              if (void 0 === t)
                                  throw new ReferenceError(
                                      "this hasn't been initialised - super() hasn't been called"
                                  );
                              return t;
                          })(t)
                        : e;
                }
                function a(t) {
                    return (a = Object.setPrototypeOf
                        ? Object.getPrototypeOf
                        : function (t) {
                              return t.__proto__ || Object.getPrototypeOf(t);
                          })(t);
                }
                n.r(e), n.d(e, { default: () => c });
                var c = (function (t) {
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
                            e && u(t, e);
                    })(f, t);
                    var e,
                        n,
                        r,
                        c,
                        l =
                            ((r = f),
                            (c = (function () {
                                if (
                                    'undefined' == typeof Reflect ||
                                    !Reflect.construct
                                )
                                    return !1;
                                if (Reflect.construct.sham) return !1;
                                if ('function' == typeof Proxy) return !0;
                                try {
                                    return (
                                        Boolean.prototype.valueOf.call(
                                            Reflect.construct(
                                                Boolean,
                                                [],
                                                function () {}
                                            )
                                        ),
                                        !0
                                    );
                                } catch (t) {
                                    return !1;
                                }
                            })()),
                            function () {
                                var t,
                                    e = a(r);
                                if (c) {
                                    var n = a(this).constructor;
                                    t = Reflect.construct(e, arguments, n);
                                } else t = e.apply(this, arguments);
                                return s(this, t);
                            });
                    function f() {
                        return i(this, f), l.apply(this, arguments);
                    }
                    return (
                        (e = f),
                        (n = [
                            {
                                key: 'config',
                                value: function () {
                                    var t = this;
                                    return {
                                        cols: [
                                            {},
                                            {
                                                rows: [
                                                    {},
                                                    {
                                                        view: 'form',
                                                        localId: 'login:form',
                                                        width: 400,
                                                        borderless: !1,
                                                        margin: 10,
                                                        rows: [
                                                            {
                                                                type: 'header',
                                                                template:
                                                                    this.app
                                                                        .config
                                                                        .name,
                                                            },
                                                            {
                                                                view: 'text',
                                                                name: 'email',
                                                                label: 'Email',
                                                                labelPosition:
                                                                    'top',
                                                            },
                                                            {
                                                                view: 'text',
                                                                type: 'password',
                                                                name: 'password',
                                                                label: 'Password',
                                                                labelPosition:
                                                                    'top',
                                                            },
                                                            {
                                                                view: 'button',
                                                                value: 'Login',
                                                                click: function () {
                                                                    return t.do_login();
                                                                },
                                                                hotkey: 'enter',
                                                            },
                                                        ],
                                                        rules: {
                                                            email: webix.rules
                                                                .isNotEmpty,
                                                            password:
                                                                webix.rules
                                                                    .isNotEmpty,
                                                        },
                                                    },
                                                    {},
                                                ],
                                            },
                                            {},
                                        ],
                                    };
                                },
                            },
                            {
                                key: 'init',
                                value: function (t) {
                                    t.$view.querySelector('input').focus();
                                },
                            },
                            {
                                key: 'do_login',
                                value: function () {
                                    var t = this.app.getService('user'),
                                        e = this.$$('login:form');
                                    if (e.validate()) {
                                        var n = e.getValues();
                                        t.login(n.email, n.password)
                                            .then(function (t) {
                                                !(function (t) {
                                                    throw new TypeError(
                                                        '"user" is read-only'
                                                    );
                                                })();
                                            })
                                            .catch(function () {
                                                webix.html.removeCss(
                                                    e.$view,
                                                    'invalid_login'
                                                ),
                                                    e.elements.password.focus(),
                                                    webix.delay(function () {
                                                        webix.html.addCss(
                                                            e.$view,
                                                            'invalid_login'
                                                        );
                                                    });
                                            });
                                    }
                                },
                            },
                        ]) && o(e.prototype, n),
                        f
                    );
                })(n(644).iC);
            },
            426: (t, e, n) => {
                'use strict';
                n.r(e), n.d(e, { default: () => f });
                var r = n(644),
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
                            options: ['1', '2', '3', '4'],
                        },
                        {
                            id: 3,
                            title: 'Площадь Африки составляет:',
                            options: ['1', '2', '3', '4'],
                        },
                        {
                            id: 4,
                            title: 'Режиссер фильма "Долгая дорога" - ',
                            options: ['1', '2', '3', '4'],
                        },
                        {
                            id: 5,
                            title: 'Как называют сотрудников правопорядка в Греции?',
                            options: ['1', '2', '3'],
                        },
                    ];
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
                    if (!(t instanceof e))
                        throw new TypeError(
                            'Cannot call a class as a function'
                        );
                }
                function s(t, e) {
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
                function c(t, e) {
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
                function l(t) {
                    return (l = Object.setPrototypeOf
                        ? Object.getPrototypeOf
                        : function (t) {
                              return t.__proto__ || Object.getPrototypeOf(t);
                          })(t);
                }
                var f = (function (t) {
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
                            e && a(t, e);
                    })(p, t);
                    var e,
                        n,
                        r,
                        o,
                        f =
                            ((r = p),
                            (o = (function () {
                                if (
                                    'undefined' == typeof Reflect ||
                                    !Reflect.construct
                                )
                                    return !1;
                                if (Reflect.construct.sham) return !1;
                                if ('function' == typeof Proxy) return !0;
                                try {
                                    return (
                                        Boolean.prototype.valueOf.call(
                                            Reflect.construct(
                                                Boolean,
                                                [],
                                                function () {}
                                            )
                                        ),
                                        !0
                                    );
                                } catch (t) {
                                    return !1;
                                }
                            })()),
                            function () {
                                var t,
                                    e = l(r);
                                if (o) {
                                    var n = l(this).constructor;
                                    t = Reflect.construct(e, arguments, n);
                                } else t = e.apply(this, arguments);
                                return c(this, t);
                            });
                    function p() {
                        return u(this, p), f.apply(this, arguments);
                    }
                    return (
                        (e = p),
                        (n = [
                            {
                                key: 'config',
                                value: function () {
                                    var t = this;
                                    return {
                                        rows: [
                                            {
                                                view: 'label',
                                                label: i[
                                                    +this.getUrl()[1].page - 1
                                                ].title,
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
                                                    if (
                                                        !t
                                                            .$$('options')
                                                            .getValue()
                                                    )
                                                        return (
                                                            t
                                                                .$$('error')
                                                                .show(),
                                                            void setTimeout(
                                                                function () {
                                                                    t.$$(
                                                                        'error'
                                                                    ).hide();
                                                                },
                                                                2e3
                                                            )
                                                        );
                                                    '5' !== t._url[1].page
                                                        ? (t.$$('error').hide(),
                                                          t
                                                              .$$('options')
                                                              .setValue(),
                                                          (t._nextUrl =
                                                              '/layout/question/'.concat(
                                                                  +t.getUrl()[1]
                                                                      .page + 1
                                                              )),
                                                          t.app.show(
                                                              t._nextUrl
                                                          ))
                                                        : supervisor &&
                                                          (console.log(
                                                              supervisor
                                                          ),
                                                          supervisor
                                                              .stop()
                                                              .then(
                                                                  function () {
                                                                      console.log(
                                                                          'supervisor stopped'
                                                                      );
                                                                  }
                                                              )
                                                              .catch(function (
                                                                  t
                                                              ) {
                                                                  return console.log(
                                                                      t
                                                                  );
                                                              })
                                                              .then(
                                                                  function () {
                                                                      return t.app.show(
                                                                          '/layout/score'
                                                                      );
                                                                  }
                                                              ));
                                                },
                                            },
                                        ],
                                    };
                                },
                            },
                            {
                                key: 'initQuestion',
                                value: function (t, e) {
                                    t
                                        .queryView({ view: 'label' })
                                        .setValue(i[e].title),
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
                        ]) && s(e.prototype, n),
                        p
                    );
                })(r.iC);
            },
            131: (t, e, n) => {
                'use strict';
                function r(t) {
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
                function i(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError(
                            'Cannot call a class as a function'
                        );
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
                function s(t, e) {
                    return !e || ('object' !== r(e) && 'function' != typeof e)
                        ? (function (t) {
                              if (void 0 === t)
                                  throw new ReferenceError(
                                      "this hasn't been initialised - super() hasn't been called"
                                  );
                              return t;
                          })(t)
                        : e;
                }
                function a(t) {
                    return (a = Object.setPrototypeOf
                        ? Object.getPrototypeOf
                        : function (t) {
                              return t.__proto__ || Object.getPrototypeOf(t);
                          })(t);
                }
                n.r(e), n.d(e, { default: () => c });
                var c = (function (t) {
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
                            e && u(t, e);
                    })(f, t);
                    var e,
                        n,
                        r,
                        c,
                        l =
                            ((r = f),
                            (c = (function () {
                                if (
                                    'undefined' == typeof Reflect ||
                                    !Reflect.construct
                                )
                                    return !1;
                                if (Reflect.construct.sham) return !1;
                                if ('function' == typeof Proxy) return !0;
                                try {
                                    return (
                                        Boolean.prototype.valueOf.call(
                                            Reflect.construct(
                                                Boolean,
                                                [],
                                                function () {}
                                            )
                                        ),
                                        !0
                                    );
                                } catch (t) {
                                    return !1;
                                }
                            })()),
                            function () {
                                var t,
                                    e = a(r);
                                if (c) {
                                    var n = a(this).constructor;
                                    t = Reflect.construct(e, arguments, n);
                                } else t = e.apply(this, arguments);
                                return s(this, t);
                            });
                    function f() {
                        return i(this, f), l.apply(this, arguments);
                    }
                    return (
                        (e = f),
                        (n = [
                            {
                                key: 'config',
                                value: function () {
                                    return {
                                        cols: [{ template: 'Completed' }],
                                    };
                                },
                            },
                        ]) && o(e.prototype, n),
                        f
                    );
                })(n(644).iC);
            },
            39: (t, e, n) => {
                'use strict';
                function r(t) {
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
                function i(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError(
                            'Cannot call a class as a function'
                        );
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
                function s(t, e) {
                    return !e || ('object' !== r(e) && 'function' != typeof e)
                        ? (function (t) {
                              if (void 0 === t)
                                  throw new ReferenceError(
                                      "this hasn't been initialised - super() hasn't been called"
                                  );
                              return t;
                          })(t)
                        : e;
                }
                function a(t) {
                    return (a = Object.setPrototypeOf
                        ? Object.getPrototypeOf
                        : function (t) {
                              return t.__proto__ || Object.getPrototypeOf(t);
                          })(t);
                }
                n.r(e), n.d(e, { default: () => c });
                var c = (function (t) {
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
                            e && u(t, e);
                    })(f, t);
                    var e,
                        n,
                        r,
                        c,
                        l =
                            ((r = f),
                            (c = (function () {
                                if (
                                    'undefined' == typeof Reflect ||
                                    !Reflect.construct
                                )
                                    return !1;
                                if (Reflect.construct.sham) return !1;
                                if ('function' == typeof Proxy) return !0;
                                try {
                                    return (
                                        Boolean.prototype.valueOf.call(
                                            Reflect.construct(
                                                Boolean,
                                                [],
                                                function () {}
                                            )
                                        ),
                                        !0
                                    );
                                } catch (t) {
                                    return !1;
                                }
                            })()),
                            function () {
                                var t,
                                    e = a(r);
                                if (c) {
                                    var n = a(this).constructor;
                                    t = Reflect.construct(e, arguments, n);
                                } else t = e.apply(this, arguments);
                                return s(this, t);
                            });
                    function f() {
                        return i(this, f), l.apply(this, arguments);
                    }
                    return (
                        (e = f),
                        (n = [
                            {
                                key: 'generatePayload',
                                value: function () {
                                    return (
                                        this.app.getService('user').getUser(),
                                        {
                                            username: 'test',
                                            nickname: 'test',
                                            template: 'default',
                                            subject:
                                                this.$$('examName').getValue(),
                                            link: 'https://damp-anchorage-65606.herokuapp.com/api/report/',
                                        }
                                    );
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
                                                        view: 'radio',
                                                        name: 'examName',
                                                        localId: 'examName',
                                                        label: 'Экзамен',
                                                        options: [
                                                            'География',
                                                            'Геометрия',
                                                            'Ботаника',
                                                        ],
                                                    },
                                                    {
                                                        align: 'center',
                                                        view: 'button',
                                                        value: 'Start',
                                                        paddingY: 25,
                                                        id: 'start',
                                                        css: 'webix_primary',
                                                        click: function () {
                                                            var e =
                                                                t.generatePayload();
                                                            webix
                                                                .ajax()
                                                                .post(
                                                                    '/api/token',
                                                                    e
                                                                )
                                                                .then(function (
                                                                    t
                                                                ) {
                                                                    return t.json();
                                                                })
                                                                .then(function (
                                                                    e
                                                                ) {
                                                                    var n =
                                                                            e.token,
                                                                        r =
                                                                            new Supervisor(
                                                                                {
                                                                                    url: 'https://dev04.proctoring.online',
                                                                                }
                                                                            );
                                                                    r.init({
                                                                        provider:
                                                                            'jwt',
                                                                        token: n,
                                                                    })
                                                                        .then(
                                                                            function () {
                                                                                return r.start();
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
                                                                                t.app.show(
                                                                                    '/layout/question/1'
                                                                                );
                                                                            }
                                                                        );
                                                                });
                                                        },
                                                    },
                                                ],
                                            },
                                        ],
                                    };
                                },
                            },
                        ]) && o(e.prototype, n),
                        f
                    );
                })(n(644).iC);
            },
            755: (t, e, n) => {
                var r = {
                    './en': 827,
                    './en.js': 827,
                    './es': 699,
                    './es.js': 699,
                    './ru': 801,
                    './ru.js': 801,
                };
                function i(t) {
                    var e = o(t);
                    return n(e);
                }
                function o(t) {
                    if (!n.o(r, t)) {
                        var e = new Error("Cannot find module '" + t + "'");
                        throw ((e.code = 'MODULE_NOT_FOUND'), e);
                    }
                    return r[t];
                }
                (i.keys = function () {
                    return Object.keys(r);
                }),
                    (i.resolve = o),
                    (t.exports = i),
                    (i.id = 755);
            },
            768: (t, e, n) => {
                var r = {
                    './layout': 748,
                    './layout.js': 748,
                    './login': 671,
                    './login.js': 671,
                    './question': 426,
                    './question.js': 426,
                    './score': 131,
                    './score.js': 131,
                    './start': 39,
                    './start.js': 39,
                };
                function i(t) {
                    var e = o(t);
                    return n(e);
                }
                function o(t) {
                    if (!n.o(r, t)) {
                        var e = new Error("Cannot find module '" + t + "'");
                        throw ((e.code = 'MODULE_NOT_FOUND'), e);
                    }
                    return r[t];
                }
                (i.keys = function () {
                    return Object.keys(r);
                }),
                    (i.resolve = o),
                    (t.exports = i),
                    (i.id = 768);
            },
        },
        e = {};
    function n(r) {
        var i = e[r];
        if (void 0 !== i) return i.exports;
        var o = (e[r] = { exports: {} });
        return t[r](o, o.exports, n), o.exports;
    }
    (n.d = (t, e) => {
        for (var r in e)
            n.o(e, r) &&
                !n.o(t, r) &&
                Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
    }),
        (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
        (n.r = (t) => {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(t, Symbol.toStringTag, {
                    value: 'Module',
                }),
                Object.defineProperty(t, '__esModule', { value: !0 });
        }),
        (() => {
            'use strict';
            const t = {
                status: function () {
                    return webix
                        .ajax()
                        .post('api/login/status')
                        .then(function (t) {
                            return t.json();
                        });
                },
                login: function (t, e) {
                    return webix
                        .ajax()
                        .post('api/login', { email: t, password: e })
                        .then(function (t) {
                            return localStorage.setItem('token', t), t.json();
                        });
                },
                logout: function () {
                    return webix
                        .ajax()
                        .post('api/logout')
                        .then(function (t) {
                            return localStorage.removeItem('token'), t.json();
                        });
                },
            };
            var e = n(644);
            function r(t) {
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
            function i(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e &&
                        (r = r.filter(function (e) {
                            return Object.getOwnPropertyDescriptor(
                                t,
                                e
                            ).enumerable;
                        })),
                        n.push.apply(n, r);
                }
                return n;
            }
            function o(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2
                        ? i(Object(n), !0).forEach(function (e) {
                              u(t, e, n[e]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                              t,
                              Object.getOwnPropertyDescriptors(n)
                          )
                        : i(Object(n)).forEach(function (e) {
                              Object.defineProperty(
                                  t,
                                  e,
                                  Object.getOwnPropertyDescriptor(n, e)
                              );
                          });
                }
                return t;
            }
            function u(t, e, n) {
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
            function a(t, e) {
                return !e || ('object' !== r(e) && 'function' != typeof e)
                    ? (function (t) {
                          if (void 0 === t)
                              throw new ReferenceError(
                                  "this hasn't been initialised - super() hasn't been called"
                              );
                          return t;
                      })(t)
                    : e;
            }
            function c(t) {
                return (c = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (t) {
                          return t.__proto__ || Object.getPrototypeOf(t);
                      })(t);
            }
            var l = (function (n) {
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
                        e && s(t, e);
                })(l, n);
                var r,
                    i,
                    u =
                        ((r = l),
                        (i = (function () {
                            if (
                                'undefined' == typeof Reflect ||
                                !Reflect.construct
                            )
                                return !1;
                            if (Reflect.construct.sham) return !1;
                            if ('function' == typeof Proxy) return !0;
                            try {
                                return (
                                    Boolean.prototype.valueOf.call(
                                        Reflect.construct(
                                            Boolean,
                                            [],
                                            function () {}
                                        )
                                    ),
                                    !0
                                );
                            } catch (t) {
                                return !1;
                            }
                        })()),
                        function () {
                            var t,
                                e = c(r);
                            if (i) {
                                var n = c(this).constructor;
                                t = Reflect.construct(e, arguments, n);
                            } else t = e.apply(this, arguments);
                            return a(this, t);
                        });
                function l(n) {
                    var r;
                    !(function (t, e) {
                        if (!(t instanceof e))
                            throw new TypeError(
                                'Cannot call a class as a function'
                            );
                    })(this, l);
                    var i = {
                        id: 'webix-jet-app',
                        version: '1.1.0',
                        router: e.UT,
                        debug: !1,
                        start: '/layout/start',
                    };
                    return (
                        (r = u.call(this, o(o({}, i), n))).use(e.Gr.User, {
                            model: t,
                        }),
                        r.use(e.Gr.Locale, { lang: 'ru' }),
                        r
                    );
                }
                return l;
            })(e.Dd);
            webix.ready(function () {
                return new l().render();
            });
        })();
})();
