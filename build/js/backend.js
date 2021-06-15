!(function (e) {
    var r = {};
    function t(n) {
        if (r[n]) return r[n].exports;
        var o = (r[n] = { i: n, l: !1, exports: {} });
        return e[n].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
    }
    (t.m = e),
        (t.c = r),
        (t.d = function (e, r, n) {
            t.o(e, r) ||
                Object.defineProperty(e, r, { enumerable: !0, get: n });
        }),
        (t.r = function (e) {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                    value: 'Module',
                }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (t.t = function (e, r) {
            if ((1 & r && (e = t(e)), 8 & r)) return e;
            if (4 & r && 'object' == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (
                (t.r(n),
                Object.defineProperty(n, 'default', {
                    enumerable: !0,
                    value: e,
                }),
                2 & r && 'string' != typeof e)
            )
                for (var o in e)
                    t.d(
                        n,
                        o,
                        function (r) {
                            return e[r];
                        }.bind(null, o)
                    );
            return n;
        }),
        (t.n = function (e) {
            var r =
                e && e.__esModule
                    ? function () {
                          return e.default;
                      }
                    : function () {
                          return e;
                      };
            return t.d(r, 'a', r), r;
        }),
        (t.o = function (e, r) {
            return Object.prototype.hasOwnProperty.call(e, r);
        }),
        (t.p = '/build/'),
        t((t.s = 9));
})([
    ,
    function (e, r, t) {
        t(14).config();
        var n = process.env,
            o = n.PORT,
            u = n.JWT_SECRET,
            i = n.MONGO_LOGIN,
            s = n.MONGO_PASSWORD,
            a = n.MONGO_REALM,
            c = n.MONGO_DB,
            f = 'mongodb+srv://'
                .concat(i, ':')
                .concat(s, '@')
                .concat(a, '/')
                .concat(c, '?retryWrites=true&w=majority');
        e.exports = { PORT: o, JWT_SECRET: u, MONGO_URL: f };
    },
    function (e, r) {
        e.exports = require('express');
    },
    function (e, r) {
        e.exports = require('mongoose');
    },
    function (e, r) {
        e.exports = require('passport');
    },
    function (e, r) {
        e.exports = require('passport-jwt');
    },
    ,
    ,
    ,
    function (e, r, t) {
        var n = t(2),
            o = t(3),
            u = t(10).router,
            i = t(1),
            s = i.PORT,
            a = i.MONGO_URL;
        o.connect(a, { useNewUrlParser: !0, useUnifiedTopology: !0 }),
            o.set('useCreateIndex', !0),
            o.connection.on('error', function (e) {
                return console.log(e);
            }),
            t(15);
        var c = n();
        c.use(n.urlencoded({ extended: !1 })),
            c.use(n.json()),
            c.use(n.static('build')),
            c.use('/', u),
            c.use(function (e, r, t, n) {
                t.status(e.status || 500), t.json({ error: e });
            }),
            c.listen(s, function () {
                return console.log('app running on port ', s);
            });
    },
    function (e, r, t) {
        (function (r) {
            function n(e, r, t, n, o, u, i) {
                try {
                    var s = e[u](i),
                        a = s.value;
                } catch (e) {
                    return void t(e);
                }
                s.done ? r(a) : Promise.resolve(a).then(n, o);
            }
            function o(e) {
                return function () {
                    var r = this,
                        t = arguments;
                    return new Promise(function (o, u) {
                        var i = e.apply(r, t);
                        function s(e) {
                            n(i, o, u, s, a, 'next', e);
                        }
                        function a(e) {
                            n(i, o, u, s, a, 'throw', e);
                        }
                        s(void 0);
                    });
                };
            }
            var u = t(11),
                i = t(4),
                s = t(13),
                a = t(1).JWT_SECRET,
                c = t(2).Router();
            c.get('/', function (e, t) {
                t.sendFile(u.join(r, '../index.html'));
            }),
                c.post(
                    '/signup',
                    i.authenticate('signup', { session: !1 }),
                    (function () {
                        var e = o(
                            regeneratorRuntime.mark(function e(r, t, n) {
                                return regeneratorRuntime.wrap(function (e) {
                                    for (;;)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                t.json({
                                                    message:
                                                        'Signup successful',
                                                    user: r.user,
                                                });
                                            case 1:
                                            case 'end':
                                                return e.stop();
                                        }
                                }, e);
                            })
                        );
                        return function (r, t, n) {
                            return e.apply(this, arguments);
                        };
                    })()
                ),
                c.post(
                    '/login',
                    (function () {
                        var e = o(
                            regeneratorRuntime.mark(function e(r, t, n) {
                                return regeneratorRuntime.wrap(function (e) {
                                    for (;;)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                i.authenticate(
                                                    'login',
                                                    (function () {
                                                        var e = o(
                                                            regeneratorRuntime.mark(
                                                                function e(
                                                                    u,
                                                                    i,
                                                                    c
                                                                ) {
                                                                    var f;
                                                                    return regeneratorRuntime.wrap(
                                                                        function (
                                                                            e
                                                                        ) {
                                                                            for (;;)
                                                                                switch (
                                                                                    (e.prev =
                                                                                        e.next)
                                                                                ) {
                                                                                    case 0:
                                                                                        if (
                                                                                            ((e.prev = 0),
                                                                                            !u &&
                                                                                                i)
                                                                                        ) {
                                                                                            e.next = 4;
                                                                                            break;
                                                                                        }
                                                                                        return (
                                                                                            (f =
                                                                                                new Error(
                                                                                                    'An error occurred.'
                                                                                                )),
                                                                                            e.abrupt(
                                                                                                'return',
                                                                                                n(
                                                                                                    f
                                                                                                )
                                                                                            )
                                                                                        );
                                                                                    case 4:
                                                                                        r.login(
                                                                                            i,
                                                                                            {
                                                                                                session:
                                                                                                    !1,
                                                                                            },
                                                                                            (function () {
                                                                                                var e =
                                                                                                    o(
                                                                                                        regeneratorRuntime.mark(
                                                                                                            function e(
                                                                                                                r
                                                                                                            ) {
                                                                                                                var o,
                                                                                                                    u;
                                                                                                                return regeneratorRuntime.wrap(
                                                                                                                    function (
                                                                                                                        e
                                                                                                                    ) {
                                                                                                                        for (;;)
                                                                                                                            switch (
                                                                                                                                (e.prev =
                                                                                                                                    e.next)
                                                                                                                            ) {
                                                                                                                                case 0:
                                                                                                                                    if (
                                                                                                                                        !r
                                                                                                                                    ) {
                                                                                                                                        e.next = 2;
                                                                                                                                        break;
                                                                                                                                    }
                                                                                                                                    return e.abrupt(
                                                                                                                                        'return',
                                                                                                                                        n(
                                                                                                                                            r
                                                                                                                                        )
                                                                                                                                    );
                                                                                                                                case 2:
                                                                                                                                    return (
                                                                                                                                        (o =
                                                                                                                                            {
                                                                                                                                                _id: i._id,
                                                                                                                                                email: i.email,
                                                                                                                                            }),
                                                                                                                                        (u =
                                                                                                                                            s.sign(
                                                                                                                                                {
                                                                                                                                                    user: o,
                                                                                                                                                },
                                                                                                                                                a,
                                                                                                                                                {
                                                                                                                                                    expiresIn:
                                                                                                                                                        '2h',
                                                                                                                                                }
                                                                                                                                            )),
                                                                                                                                        e.abrupt(
                                                                                                                                            'return',
                                                                                                                                            t.json(
                                                                                                                                                {
                                                                                                                                                    token: u,
                                                                                                                                                }
                                                                                                                                            )
                                                                                                                                        )
                                                                                                                                    );
                                                                                                                                case 5:
                                                                                                                                case 'end':
                                                                                                                                    return e.stop();
                                                                                                                            }
                                                                                                                    },
                                                                                                                    e
                                                                                                                );
                                                                                                            }
                                                                                                        )
                                                                                                    );
                                                                                                return function (
                                                                                                    r
                                                                                                ) {
                                                                                                    return e.apply(
                                                                                                        this,
                                                                                                        arguments
                                                                                                    );
                                                                                                };
                                                                                            })()
                                                                                        ),
                                                                                            (e.next = 10);
                                                                                        break;
                                                                                    case 7:
                                                                                        return (
                                                                                            (e.prev = 7),
                                                                                            (e.t0 =
                                                                                                e.catch(
                                                                                                    0
                                                                                                )),
                                                                                            e.abrupt(
                                                                                                'return',
                                                                                                n(
                                                                                                    e.t0
                                                                                                )
                                                                                            )
                                                                                        );
                                                                                    case 10:
                                                                                    case 'end':
                                                                                        return e.stop();
                                                                                }
                                                                        },
                                                                        e,
                                                                        null,
                                                                        [[0, 7]]
                                                                    );
                                                                }
                                                            )
                                                        );
                                                        return function (
                                                            r,
                                                            t,
                                                            n
                                                        ) {
                                                            return e.apply(
                                                                this,
                                                                arguments
                                                            );
                                                        };
                                                    })()
                                                )(r, t, n);
                                            case 1:
                                            case 'end':
                                                return e.stop();
                                        }
                                }, e);
                            })
                        );
                        return function (r, t, n) {
                            return e.apply(this, arguments);
                        };
                    })()
                ),
                c.get('/profile', function (e, r, t) {
                    r.json({
                        message: 'You made it to the secure route',
                        user: e.user,
                        token: e.query.secret_token,
                    });
                }),
                (e.exports = { router: c });
        }.call(this, '/'));
    },
    function (e, r, t) {
        (function (e) {
            function t(e, r) {
                for (var t = 0, n = e.length - 1; n >= 0; n--) {
                    var o = e[n];
                    '.' === o
                        ? e.splice(n, 1)
                        : '..' === o
                        ? (e.splice(n, 1), t++)
                        : t && (e.splice(n, 1), t--);
                }
                if (r) for (; t--; t) e.unshift('..');
                return e;
            }
            function n(e, r) {
                if (e.filter) return e.filter(r);
                for (var t = [], n = 0; n < e.length; n++)
                    r(e[n], n, e) && t.push(e[n]);
                return t;
            }
            (r.resolve = function () {
                for (
                    var r = '', o = !1, u = arguments.length - 1;
                    u >= -1 && !o;
                    u--
                ) {
                    var i = u >= 0 ? arguments[u] : e.cwd();
                    if ('string' != typeof i)
                        throw new TypeError(
                            'Arguments to path.resolve must be strings'
                        );
                    i && ((r = i + '/' + r), (o = '/' === i.charAt(0)));
                }
                return (
                    (o ? '/' : '') +
                        (r = t(
                            n(r.split('/'), function (e) {
                                return !!e;
                            }),
                            !o
                        ).join('/')) || '.'
                );
            }),
                (r.normalize = function (e) {
                    var u = r.isAbsolute(e),
                        i = '/' === o(e, -1);
                    return (
                        (e = t(
                            n(e.split('/'), function (e) {
                                return !!e;
                            }),
                            !u
                        ).join('/')) ||
                            u ||
                            (e = '.'),
                        e && i && (e += '/'),
                        (u ? '/' : '') + e
                    );
                }),
                (r.isAbsolute = function (e) {
                    return '/' === e.charAt(0);
                }),
                (r.join = function () {
                    var e = Array.prototype.slice.call(arguments, 0);
                    return r.normalize(
                        n(e, function (e, r) {
                            if ('string' != typeof e)
                                throw new TypeError(
                                    'Arguments to path.join must be strings'
                                );
                            return e;
                        }).join('/')
                    );
                }),
                (r.relative = function (e, t) {
                    function n(e) {
                        for (var r = 0; r < e.length && '' === e[r]; r++);
                        for (var t = e.length - 1; t >= 0 && '' === e[t]; t--);
                        return r > t ? [] : e.slice(r, t - r + 1);
                    }
                    (e = r.resolve(e).substr(1)), (t = r.resolve(t).substr(1));
                    for (
                        var o = n(e.split('/')),
                            u = n(t.split('/')),
                            i = Math.min(o.length, u.length),
                            s = i,
                            a = 0;
                        a < i;
                        a++
                    )
                        if (o[a] !== u[a]) {
                            s = a;
                            break;
                        }
                    var c = [];
                    for (a = s; a < o.length; a++) c.push('..');
                    return (c = c.concat(u.slice(s))).join('/');
                }),
                (r.sep = '/'),
                (r.delimiter = ':'),
                (r.dirname = function (e) {
                    if (('string' != typeof e && (e += ''), 0 === e.length))
                        return '.';
                    for (
                        var r = e.charCodeAt(0),
                            t = 47 === r,
                            n = -1,
                            o = !0,
                            u = e.length - 1;
                        u >= 1;
                        --u
                    )
                        if (47 === (r = e.charCodeAt(u))) {
                            if (!o) {
                                n = u;
                                break;
                            }
                        } else o = !1;
                    return -1 === n
                        ? t
                            ? '/'
                            : '.'
                        : t && 1 === n
                        ? '/'
                        : e.slice(0, n);
                }),
                (r.basename = function (e, r) {
                    var t = (function (e) {
                        'string' != typeof e && (e += '');
                        var r,
                            t = 0,
                            n = -1,
                            o = !0;
                        for (r = e.length - 1; r >= 0; --r)
                            if (47 === e.charCodeAt(r)) {
                                if (!o) {
                                    t = r + 1;
                                    break;
                                }
                            } else -1 === n && ((o = !1), (n = r + 1));
                        return -1 === n ? '' : e.slice(t, n);
                    })(e);
                    return (
                        r &&
                            t.substr(-1 * r.length) === r &&
                            (t = t.substr(0, t.length - r.length)),
                        t
                    );
                }),
                (r.extname = function (e) {
                    'string' != typeof e && (e += '');
                    for (
                        var r = -1,
                            t = 0,
                            n = -1,
                            o = !0,
                            u = 0,
                            i = e.length - 1;
                        i >= 0;
                        --i
                    ) {
                        var s = e.charCodeAt(i);
                        if (47 !== s)
                            -1 === n && ((o = !1), (n = i + 1)),
                                46 === s
                                    ? -1 === r
                                        ? (r = i)
                                        : 1 !== u && (u = 1)
                                    : -1 !== r && (u = -1);
                        else if (!o) {
                            t = i + 1;
                            break;
                        }
                    }
                    return -1 === r ||
                        -1 === n ||
                        0 === u ||
                        (1 === u && r === n - 1 && r === t + 1)
                        ? ''
                        : e.slice(r, n);
                });
            var o =
                'b' === 'ab'.substr(-1)
                    ? function (e, r, t) {
                          return e.substr(r, t);
                      }
                    : function (e, r, t) {
                          return r < 0 && (r = e.length + r), e.substr(r, t);
                      };
        }.call(this, t(12)));
    },
    function (e, r) {
        var t,
            n,
            o = (e.exports = {});
        function u() {
            throw new Error('setTimeout has not been defined');
        }
        function i() {
            throw new Error('clearTimeout has not been defined');
        }
        function s(e) {
            if (t === setTimeout) return setTimeout(e, 0);
            if ((t === u || !t) && setTimeout)
                return (t = setTimeout), setTimeout(e, 0);
            try {
                return t(e, 0);
            } catch (r) {
                try {
                    return t.call(null, e, 0);
                } catch (r) {
                    return t.call(this, e, 0);
                }
            }
        }
        !(function () {
            try {
                t = 'function' == typeof setTimeout ? setTimeout : u;
            } catch (e) {
                t = u;
            }
            try {
                n = 'function' == typeof clearTimeout ? clearTimeout : i;
            } catch (e) {
                n = i;
            }
        })();
        var a,
            c = [],
            f = !1,
            l = -1;
        function p() {
            f &&
                a &&
                ((f = !1),
                a.length ? (c = a.concat(c)) : (l = -1),
                c.length && h());
        }
        function h() {
            if (!f) {
                var e = s(p);
                f = !0;
                for (var r = c.length; r; ) {
                    for (a = c, c = []; ++l < r; ) a && a[l].run();
                    (l = -1), (r = c.length);
                }
                (a = null),
                    (f = !1),
                    (function (e) {
                        if (n === clearTimeout) return clearTimeout(e);
                        if ((n === i || !n) && clearTimeout)
                            return (n = clearTimeout), clearTimeout(e);
                        try {
                            n(e);
                        } catch (r) {
                            try {
                                return n.call(null, e);
                            } catch (r) {
                                return n.call(this, e);
                            }
                        }
                    })(e);
            }
        }
        function v(e, r) {
            (this.fun = e), (this.array = r);
        }
        function d() {}
        (o.nextTick = function (e) {
            var r = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var t = 1; t < arguments.length; t++)
                    r[t - 1] = arguments[t];
            c.push(new v(e, r)), 1 !== c.length || f || s(h);
        }),
            (v.prototype.run = function () {
                this.fun.apply(null, this.array);
            }),
            (o.title = 'browser'),
            (o.browser = !0),
            (o.env = {}),
            (o.argv = []),
            (o.version = ''),
            (o.versions = {}),
            (o.on = d),
            (o.addListener = d),
            (o.once = d),
            (o.off = d),
            (o.removeListener = d),
            (o.removeAllListeners = d),
            (o.emit = d),
            (o.prependListener = d),
            (o.prependOnceListener = d),
            (o.listeners = function (e) {
                return [];
            }),
            (o.binding = function (e) {
                throw new Error('process.binding is not supported');
            }),
            (o.cwd = function () {
                return '/';
            }),
            (o.chdir = function (e) {
                throw new Error('process.chdir is not supported');
            }),
            (o.umask = function () {
                return 0;
            });
    },
    function (e, r) {
        e.exports = require('jsonwebtoken');
    },
    function (e, r) {
        e.exports = require('dotenv');
    },
    function (e, r, t) {
        function n(e, r, t, n, o, u, i) {
            try {
                var s = e[u](i),
                    a = s.value;
            } catch (e) {
                return void t(e);
            }
            s.done ? r(a) : Promise.resolve(a).then(n, o);
        }
        function o(e) {
            return function () {
                var r = this,
                    t = arguments;
                return new Promise(function (o, u) {
                    var i = e.apply(r, t);
                    function s(e) {
                        n(i, o, u, s, a, 'next', e);
                    }
                    function a(e) {
                        n(i, o, u, s, a, 'throw', e);
                    }
                    s(void 0);
                });
            };
        }
        var u = t(4),
            i = t(16).Strategy,
            s = t(5).Strategy,
            a = t(5).ExtractJwt,
            c = t(17),
            f = t(1).JWT_SECRET;
        u.use(
            'signup',
            new i(
                { usernameField: 'email', passwordField: 'password' },
                (function () {
                    var e = o(
                        regeneratorRuntime.mark(function e(r, t, n) {
                            var o;
                            return regeneratorRuntime.wrap(
                                function (e) {
                                    for (;;)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return (
                                                    (e.prev = 0),
                                                    (e.next = 3),
                                                    c.create({
                                                        email: r,
                                                        password: t,
                                                    })
                                                );
                                            case 3:
                                                return (
                                                    (o = e.sent),
                                                    e.abrupt(
                                                        'return',
                                                        n(null, o)
                                                    )
                                                );
                                            case 7:
                                                (e.prev = 7),
                                                    (e.t0 = e.catch(0)),
                                                    n(e.t0);
                                            case 10:
                                            case 'end':
                                                return e.stop();
                                        }
                                },
                                e,
                                null,
                                [[0, 7]]
                            );
                        })
                    );
                    return function (r, t, n) {
                        return e.apply(this, arguments);
                    };
                })()
            )
        ),
            u.use(
                'login',
                new i(
                    { usernameField: 'email', passwordField: 'password' },
                    (function () {
                        var e = o(
                            regeneratorRuntime.mark(function e(r, t, n) {
                                var o;
                                return regeneratorRuntime.wrap(
                                    function (e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    return (
                                                        (e.prev = 0),
                                                        (e.next = 3),
                                                        c.findOne({ email: r })
                                                    );
                                                case 3:
                                                    if ((o = e.sent)) {
                                                        e.next = 6;
                                                        break;
                                                    }
                                                    return e.abrupt(
                                                        'return',
                                                        n(null, !1, {
                                                            message:
                                                                'User not found',
                                                        })
                                                    );
                                                case 6:
                                                    return (
                                                        (e.next = 8),
                                                        o.isValidPassword(t)
                                                    );
                                                case 8:
                                                    if (e.sent) {
                                                        e.next = 11;
                                                        break;
                                                    }
                                                    return e.abrupt(
                                                        'return',
                                                        n(null, !1, {
                                                            message:
                                                                'Wrong Password',
                                                        })
                                                    );
                                                case 11:
                                                    return e.abrupt(
                                                        'return',
                                                        n(null, o, {
                                                            message:
                                                                'Logged in Successfully',
                                                        })
                                                    );
                                                case 14:
                                                    return (
                                                        (e.prev = 14),
                                                        (e.t0 = e.catch(0)),
                                                        e.abrupt(
                                                            'return',
                                                            n(e.t0)
                                                        )
                                                    );
                                                case 17:
                                                case 'end':
                                                    return e.stop();
                                            }
                                    },
                                    e,
                                    null,
                                    [[0, 14]]
                                );
                            })
                        );
                        return function (r, t, n) {
                            return e.apply(this, arguments);
                        };
                    })()
                )
            ),
            u.use(
                new s(
                    {
                        secretOrKey: f,
                        jwtFromRequest: a.fromExtractors([
                            a.fromUrlQueryParameter('token'),
                            a.fromHeader('token'),
                            a.fromAuthHeaderAsBearerToken(),
                        ]),
                    },
                    (function () {
                        var e = o(
                            regeneratorRuntime.mark(function e(r, t) {
                                return regeneratorRuntime.wrap(
                                    function (e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    return (
                                                        (e.prev = 0),
                                                        e.abrupt(
                                                            'return',
                                                            t(null, r.user)
                                                        )
                                                    );
                                                case 4:
                                                    (e.prev = 4),
                                                        (e.t0 = e.catch(0)),
                                                        t(e.t0);
                                                case 7:
                                                case 'end':
                                                    return e.stop();
                                            }
                                    },
                                    e,
                                    null,
                                    [[0, 4]]
                                );
                            })
                        );
                        return function (r, t) {
                            return e.apply(this, arguments);
                        };
                    })()
                )
            );
    },
    function (e, r) {
        e.exports = require('passport-local');
    },
    function (e, r, t) {
        function n(e, r, t, n, o, u, i) {
            try {
                var s = e[u](i),
                    a = s.value;
            } catch (e) {
                return void t(e);
            }
            s.done ? r(a) : Promise.resolve(a).then(n, o);
        }
        function o(e) {
            return function () {
                var r = this,
                    t = arguments;
                return new Promise(function (o, u) {
                    var i = e.apply(r, t);
                    function s(e) {
                        n(i, o, u, s, a, 'next', e);
                    }
                    function a(e) {
                        n(i, o, u, s, a, 'throw', e);
                    }
                    s(void 0);
                });
            };
        }
        var u = t(18),
            i = t(3),
            s = new (0, i.Schema)({
                email: { type: String, required: !0, unique: !0 },
                password: { type: String, required: !0 },
            });
        s.pre(
            'save',
            (function () {
                var e = o(
                    regeneratorRuntime.mark(function e(r) {
                        var t;
                        return regeneratorRuntime.wrap(
                            function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            return (
                                                this,
                                                (e.next = 3),
                                                u.hash(this.password, 10)
                                            );
                                        case 3:
                                            (t = e.sent),
                                                (this.password = t),
                                                r();
                                        case 6:
                                        case 'end':
                                            return e.stop();
                                    }
                            },
                            e,
                            this
                        );
                    })
                );
                return function (r) {
                    return e.apply(this, arguments);
                };
            })()
        ),
            (s.methods.isValidPassword = (function () {
                var e = o(
                    regeneratorRuntime.mark(function e(r) {
                        var t, n;
                        return regeneratorRuntime.wrap(
                            function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            return (
                                                (t = this),
                                                (e.next = 3),
                                                u.compare(r, t.password)
                                            );
                                        case 3:
                                            return (
                                                (n = e.sent),
                                                e.abrupt('return', n)
                                            );
                                        case 5:
                                        case 'end':
                                            return e.stop();
                                    }
                            },
                            e,
                            this
                        );
                    })
                );
                return function (r) {
                    return e.apply(this, arguments);
                };
            })());
        var a = i.model('user', s);
        e.exports = a;
    },
    function (e, r) {
        e.exports = require('bcryptjs');
    },
]);
