import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

//import "./style.scss";

import { fetchDataFromApi } from "../utils/api";
//import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import MovieCard from "../components/Moviecard";
import Spinner from "../components/Spinner";
import noResults from "../assets/no-results.png";

const SearchResult = () => {
    const [data, setData] = useState(null);
    const [pageNum, setPageNum] = useState(1);
    const [loading, setLoading] = useState(false);
    const { query } = useParams();

    const fetchInitialData = () => {
        setLoading(true);
        fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then(
            (res) => {
                setData(res);
                setPageNum((prev) => prev + 1);
                setLoading(false);
            }
        );
    };

    const fetchNextPageData = () => {
        fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then(
            (res) => {
                if (data?.results) {
                    setData({
                        ...data,
                        results: [...data?.results, ...res.results],
                    });
                } else {
                    setData(res);
                }
                setPageNum((prev) => prev + 1);
            }
        );
    };

    useEffect(() => {
        setPageNum(1);
        fetchInitialData();
    }, [query]);

    return (
        <div className="min-h-[700px] pt-[100px]">
            {loading && <Spinner initial={true} />}
            {!loading && (
                <div className="xs:mx-20 mx-10 flex justify-center items-center flex-col">
                    {data?.results?.length > 0 ? (
                        <>
                            <div className="text-[24px] w-full leading-[34px] text-white mb-[35px]">
                                {`Search ${
                                    data?.total_results > 1
                                        ? "results"
                                        : "result"
                                } of '${query}'`}
                            </div>
                            <InfiniteScroll
                                className="flex flex-row flex-wrap md:gap-[20px] gap-[20px] mb-[50px]"
                                dataLength={data?.results?.length || []}
                                next={fetchNextPageData}
                                hasMore={pageNum <= data?.total_pages}
                                loader={<Spinner />}
                            >
                                {data?.results.map((item, index) => {
                                    if (item?.media_type === "person") return;
                                    return (
                                        <MovieCard
                                            key={index}
                                            data={item}
                                            fromSearch={true}
                                        />
                                    );
                                })}
                            </InfiniteScroll>
                        </>
                    ) : (
                        <span className="text-[24px] text-[--black-light]">
                            Sorry, Results not found!
                        </span>
                    )}
                </div>
            )}
        </div>
    );
};

export default SearchResult;