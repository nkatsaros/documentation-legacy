(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{188:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return g})),r.d(t,"default",(function(){return p}));var o=r(1),n=r(10),i=(r(0),r(395)),a=r(400),l=r.n(a),c={id:"go-sdk-video-tutorial",title:"SDK Video Tutorial",description:"Video tutorial to help you build your first workflow using Go SDK"},s={id:"version-0.25.0/go-sdk-video-tutorial",isDocsHomePage:!1,title:"SDK Video Tutorial",description:"Video tutorial to help you build your first workflow using Go SDK",source:"@site/versioned_docs/version-0.25.0/go-sdk-video-tutorial.md",permalink:"/docs/0.25.0/go-sdk-video-tutorial",editUrl:"https://github.com/temporalio/temporal-documentation-legacy-v2/blob/master/versioned_docs/version-0.25.0/go-sdk-video-tutorial.md",version:"0.25.0",sidebar:"version-0.25.0/docs",previous:{title:"Quick Start",permalink:"/docs/0.25.0/go-quick-start"},next:{title:"Worker Service",permalink:"/docs/0.25.0/go-workers"},latestVersionMainDocPermalink:"/docs/overview"},g=[],u={rightToc:g};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)(l.a,{url:"https://www.youtube.com/watch?v=Wo0y_Ce3d4I",mdxType:"ReactPlayer"}),Object(i.b)("p",null,"Source code:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-go"}),'package activities\n\nimport (\n    "context"\n\n    "go.temporal.io/temporal/activity"\n)\n\n// GetUser is the implementation for Temporal activity\nfunc GetUser(ctx context.Context) (string, error) {\n    logger := activity.GetLogger(ctx)\n    logger.Info("GetUser activity called")\n    return "Temporal", nil\n}\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-go"}),'package activities\n\nimport (\n    "context"\n    "fmt"\n\n    "go.temporal.io/temporal/activity"\n)\n\n// SendGreeting is the implementation for Temporal activity\nfunc SendGreeting(ctx context.Context, user string) error {\n    logger := activity.GetLogger(ctx)\n    logger.Info("SendGreeting activity called")\n\n    fmt.Printf("Greeting sent to user: %v\\n", user)\n    return nil\n}\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-go"}),'package workflows\n\nimport (\n    "time"\n\n    "github.com/samarabbas/tutorial-go-sdk/activities"\n    "go.temporal.io/temporal/workflow"\n    "go.uber.org/zap"\n)\n\n// Greetings is the implementation for Temporal workflow\nfunc Greetings(ctx workflow.Context) error {\n    logger := workflow.GetLogger(ctx)\n    logger.Info("Workflow Greetings started")\n\n    ao := workflow.ActivityOptions{\n        ScheduleToStartTimeout: time.Hour,\n        StartToCloseTimeout:    time.Hour,\n    }\n    ctx = workflow.WithActivityOptions(ctx, ao)\n\n    var user string\n    err := workflow.ExecuteActivity(ctx, activities.GetUser).Get(ctx, &user)\n    if err != nil {\n        return err\n    }\n\n    err = workflow.ExecuteActivity(ctx, activities.SendGreeting, user).Get(ctx, nil)\n    if err != nil {\n        return err\n    }\n\n    logger.Info("Greetings workflow complete", zap.String("user", user))\n    return nil\n}\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-go"}),'package main\n\nimport (\n    "github.com/uber-go/tally"\n    "go.uber.org/zap"\n\n    "github.com/samarabbas/tutorial-go-sdk/activities"\n    "github.com/samarabbas/tutorial-go-sdk/workflows"\n\n    "go.temporal.io/temporal/client"\n    "go.temporal.io/temporal/worker"\n)\n\nfunc main() {\n    logger, err := zap.NewDevelopment()\n    if err != nil {\n        panic(err)\n    }\n\n    logger.Info("Zap logger created")\n    scope := tally.NoopScope\n\n    // The client is a heavyweight object that should be created once\n    serviceClient, err := client.NewClient(client.Options{\n        HostPort:     client.DefaultHostPort,\n        Namespace:   client.DefaultNamespace,\n        MetricsScope: scope,\n    })\n    if err != nil {\n        logger.Fatal("Unable to start worker", zap.Error(err))\n    }\n\n    worker := worker.New(serviceClient, "tutorial_tl", worker.Options{\n        Logger: logger,\n    })\n\n    worker.RegisterWorkflow(workflows.Greetings)\n    worker.RegisterActivity(activities.GetUser)\n    worker.RegisterActivity(activities.SendGreeting)\n\n    err = worker.Start()\n    if err != nil {\n        logger.Fatal("Unable to start worker", zap.Error(err))\n    }\n\n    select {}\n}\n')),Object(i.b)("p",null,"Commands:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"docker run --network=host --rm temporalio/tctl:0.25.0 wf start --tl tutorial_tl -w Greet_Temporal_1 --wt Greetings --et 3600 --dt 10\n")))}p.isMDXComponent=!0}}]);