import plotly.graph_objects as go
import plotly.express as px
from wordcloud import WordCloud

#palette_cmap = ["#DFC27D","#e9c46a","#DA9B47","#00847A","#01665E","#254441"]
palette_cmap = ["#008C76","#FF6B6B","#FFD166","#6A0572","#DA9B47","#00847A"]

#color_palette_discrete = ['#002d72','#00bdf2','#c6007e','#ed8b00','#c4d600','#53565a','#97999b']
color_palette_discrete = ["#008C76","#FF6B6B","#FFD166","#6A0572","#DA9B47","#00847A"]
#color_palette_continous = ['#53565a','#00bdf2','#008ce6','#002d72'] #'#97999b',

primary_blue = "#008C76"
secondary_yellow = "#FF6B6B"
light_blue = "#FFD166"
body_gray = "#6A0572"
accent_gray = "#DA9B47"



def line_chart(df, x, y,xaxis_title,color=False):
    line_fig = px.line(df, x=x, y=y, color_discrete_sequence=color_palette_discrete)
    if color:
        line_fig = px.line(df, x=x, y=y, color=color,color_discrete_sequence=color_palette_discrete)
    line_fig.update_layout(plot_bgcolor='#FFFFFF')
    line_fig.update_layout(
        title={
            'text': xaxis_title,
            'y': 0.95,
            'x': 0.5,
            'xanchor': 'center',
            'yanchor': 'top'},
        yaxis_title="Avg Sentiment Value",
    )

    return line_fig

def pie_chart(df, x, y, xaxis_title):
    line_fig = px.pie(df, x=x, y=y, color_discrete_sequence=color_palette_discrete)
    line_fig.update_layout(plot_bgcolor='#FFFFFF')
    line_fig.update_layout(
        title={
            'text': xaxis_title,
            'y': 0.95,
            'x': 0.5,
            'xanchor': 'center',
            'yanchor': 'top'},
        yaxis_title="Avg Sentiment Value",
    )

    return line_fig

def bar_chart(df, x, y, xaxis_title,yaxis_title,color=False):
    line_fig = px.bar(df, x=x, y=y, color_discrete_sequence=color_palette_discrete)
    if color:
        line_fig = px.bar(df, x=x, y=y, color=color,color_discrete_sequence=color_palette_discrete)


    line_fig.update_layout(plot_bgcolor='#FFFFFF')
    line_fig.update_layout(
        title={
            'text': xaxis_title,
            'y': 0.95,
            'x': 0.5,
            'xanchor': 'center',
            'yanchor': 'top'},
        yaxis_title=yaxis_title,
    )

    return line_fig


def tree_map(df,path,title):
    stockvolume_sunburst_fig = px.treemap(df, path=path, values='count',
                                            color_discrete_sequence=color_palette_continous)
    stockvolume_sunburst_fig.update_layout(
            title=dict(text=title),
            plot_bgcolor='#5B5959',
            font=dict(size=13)
        )
    return stockvolume_sunburst_fig



def sunburst_chart(data, path,chart_title):
    sunburst_fig = px.sunburst(data, path=path, values="count",
                               color_discrete_sequence=color_palette_discrete)
    sunburst_fig.update_layout(plot_bgcolor='#8A8989')
    sunburst_fig.update_layout(
        title={
            'text': chart_title,
            'y': 0.95,
            'x': 0.5,
            'xanchor': 'center',
            'yanchor': 'top'}
    )
    return sunburst_fig
